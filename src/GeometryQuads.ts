import * as THREE from 'three'
import {OBJExporter} from "three/examples/jsm/exporters/OBJExporter";
import * as fs from 'fs';

export class GeometryQuads {

    Vertices: Array<THREE.Vector3> = []
    Faces: Array<Array<number>> = []
    Edges: Array<Array<number>> = []
    FaceEdges: Array<Array<number>> = []
    Buffer: THREE.BufferGeometry = new THREE.BufferGeometry()
    Catmull: GeometryQuads

    private FaceCenters: Array<THREE.Vector3> = []
    private EdgeCenters: Array<THREE.Vector3> = []
    private v: Array<number> = []
    private indices: Array<number> = []
    private Exporter: OBJExporter = new OBJExporter()

    constructor(vertices: Array<THREE.Vector3>, faces: Array<Array<number>>){

        this.Vertices = vertices
        this.Faces = faces
        this.update_geometry()

    }


    update_geometry(){

        this.Buffer = new THREE.BufferGeometry()
        this.Edges = []
        this.EdgeCenters = []
        this.FaceEdges = []

        this.Vertices.forEach(p=>{this.v.push(...[p.x, p.y, p.z])})

        this.Faces.forEach(f=>{
            
            let edge_indices = [-1, -1, -1, -1]
            let edges = [[f[0], f[1]], [f[1], f[2]], [f[2], f[3]], [f[3], f[0]]]

            edges.forEach((e, index)=>{
                let included = false
                for(let i = 0; i < this.Edges.length; i++){
                    if(this.Edges[i].includes(e[0]) && this.Edges[i].includes(e[1])){
                        edge_indices[index] = i
                        included = true
                        break
                    }
                }
                if (included == false) {
                    edge_indices[index] = this.Edges.length
                    this.Edges.push(e)
                }
            })

            this.FaceEdges.push(edge_indices)

            let center = new THREE.Vector3(0, 0, 0)
            center.add(this.Vertices[f[0]])
            center.add(this.Vertices[f[1]])
            center.add(this.Vertices[f[2]])
            center.add(this.Vertices[f[3]])
            this.FaceCenters.push(center.multiplyScalar(1/4))
            this.indices.push(...[f[0],f[1],f[2],f[3]])

        })
        
        this.form_geometry()

    }


    form_geometry(){

        let indices: Array<number> = []
        this.Faces.forEach(f =>{
            let triangle01 = [f[0], f[1], f[2]]
            let triangle02 = [f[0], f[2], f[3]]
            indices.push(...triangle01)
            indices.push(...triangle02)
        })

        this.Buffer.setIndex(indices)
        this.Buffer.setAttribute( 'position', new THREE.BufferAttribute( new Float32Array(this.v), 3 ) )

    }


    smooth_geometry(){

        this.EdgeCenters = []
        let new_vertices: Array<THREE.Vector3> = []

        this.Edges.forEach((e, eindex)=>{
            let edge_count = 0
            let center = new THREE.Vector3(0, 0, 0)
            this.FaceEdges.forEach((f, findex) => {
                if (f.includes(eindex)){
                    edge_count += 1
                    center.add(this.FaceCenters[findex])
                }
            })
            center.add(this.Vertices[e[0]])
            center.add(this.Vertices[e[1]])
            center.multiplyScalar(1/(edge_count + 2))
            this.EdgeCenters.push(center)
        })

        console.log(this.Edges.length)
        console.log(this.EdgeCenters.length)

        this.Vertices.forEach((v, v_index) => {
            let face_count = 0
            let edge_count = 0
            let average_face_centers = new THREE.Vector3(0, 0, 0)
            let average_edge_centers = new THREE.Vector3(0, 0, 0)
            let average_edge_midpoints = new THREE.Vector3(0, 0, 0)
            this.Faces.forEach((f, findex)=>{ 
                if(f.includes(v_index)){
                    face_count += 1
                    average_face_centers.add(this.FaceCenters[findex])
                    this.FaceEdges[findex].forEach(e => {
                        if(this.Edges[e].includes(v_index)){
                            edge_count += 1
                            average_edge_centers.add(this.EdgeCenters[e])
                            let midpoint = new THREE.Vector3(0, 0, 0)
                            midpoint.add(this.Vertices[this.Edges[e][0]])
                            midpoint.add(this.Vertices[this.Edges[e][1]])
                            average_edge_midpoints.add(midpoint.multiplyScalar(1/2))
                        }
                    })
                }
            })
            let valence = edge_count
            let vertex = new THREE.Vector3(0, 0, 0)
            vertex.add(average_face_centers.multiplyScalar(1/face_count/valence))
            vertex.add(average_edge_midpoints.multiplyScalar(2/edge_count/valence))
            vertex.add(v.multiplyScalar((valence-3)/valence))
            new_vertices.push(vertex)
        })

        let smooth_vertices: Array<THREE.Vector3> = []
        let flat_v: Array<number> = []
        let faces: Array<Array<number>> = []
        let indices: Array<number> = []

        this.Faces.forEach((f, findex)=>{
            for(let i = 0; i < f.length; i++){
                
                let edge_point = this.EdgeCenters[this.FaceEdges[findex][i]]
                let face_center = this.FaceCenters[findex]
                let v1 = new_vertices[f[i]]
                let v2 = new_vertices[f[(i+1)%f.length]]

                let vertices = [v1, edge_point, v2, face_center]
                let face: Array<number> = []

                vertices.forEach(v => {
                    let included = false
                    smooth_vertices.forEach((s, sindex) => {
                        if (v.distanceTo(s) < 0.001 && !included){
                            face.push(sindex)
                            included = true
                        }
                    })
                    if (included == false){
                        face.push(smooth_vertices.length)
                        smooth_vertices.push(v)
                        flat_v.push(...[v.x, v.y, v.z])
                    }
                })
                faces.push(face)
            }
        })

        console.log(faces)

        this.Catmull = new GeometryQuads(smooth_vertices, faces)

        faces.forEach(f =>{
            let triangle01 = [f[0], f[1], f[2]]
            let triangle02 = [f[0], f[2], f[3]]
            indices.push(...triangle01)
            indices.push(...triangle02)
        })

    }

    Download_Quads(): void{

        let data = "o\n"

        this.Vertices.forEach(v => {
            data += "v " + v.x.toString() + " " + v.y.toString() + " " + v.z.toString() + "\n"
        })

        this.Faces.forEach(f => {
            data += "f " + f[0].toString() + "//" + f[0].toString() + " " + f[1].toString() + "//" + f[1].toString()
            data += " " + f[2].toString() + "//" + f[2].toString() + " " + f[3].toString() + "//" + f[3].toString() + "\n"
        })

        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', "quads_geometry.obj");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();
        document.body.removeChild(element);
    }

    Download(material: THREE.Material): void{

        const body = new THREE.Mesh(this.Buffer, material)
        let data = this.Exporter.parse(body);

        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', "catmull_clark.obj");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();
        document.body.removeChild(element);
    }



}