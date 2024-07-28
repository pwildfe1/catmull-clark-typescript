import * as THREE from 'three'
import {OBJExporter} from "three/examples/jsm/exporters/OBJExporter";
import {Vec3} from "./Vec3"

export class GeometryQuads {

    Vertices: Array<Vec3> = []
    Faces: Array<Array<number>> = []
    Edges: Array<Array<number>> = []
    FaceEdges: Array<Array<number>> = []
    Buffer: THREE.BufferGeometry = new THREE.BufferGeometry()
    Catmull: GeometryQuads
    Smooth_Count: number = 0

    private FaceCenters: Array<Vec3> = []
    private EdgeCenters: Array<Vec3> = []
    private v: Array<number> = []
    private indices: Array<number> = []
    private Exporter: OBJExporter = new OBJExporter()

    constructor(vertices: Array<Vec3>, faces: Array<Array<number>>){

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

            let center = new Vec3(0, 0, 0)
            center = center.add(this.Vertices[f[0]])
            center = center.add(this.Vertices[f[1]])
            center = center.add(this.Vertices[f[2]])
            center = center.add(this.Vertices[f[3]])
            this.FaceCenters.push(center.scale(1/4))
            this.indices.push(...[f[0],f[1],f[2],f[3]])
            this.FaceEdges.push(edge_indices)

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

    smooth_geometry() : GeometryQuads {

        this.execute_catmull()
        let smoothed = this.Catmull

        if (this.Smooth_Count > 1){
            for(let i = 0; i < this.Smooth_Count; i++){
                smoothed.execute_catmull()
                smoothed = smoothed.Catmull
            }
            return smoothed
        }

        return smoothed

    }

    execute_catmull(){

        this.EdgeCenters = []
        let new_vertices: Array<Vec3> = []

        this.Edges.forEach(e =>{
            let face_count = 0
            let center = new Vec3(0, 0, 0)
            this.Faces.forEach((f, findex) => {
                if (f.includes(e[0]) && f.includes(e[1])){
                    face_count += 1
                    center = center.add(this.FaceCenters[findex])
                }
            })
            center = center.add(this.Vertices[e[0]])
            center = center.add(this.Vertices[e[1]])
            center = center.scale(1/(face_count + 2))
            this.EdgeCenters.push(center)
        })

        this.Vertices.forEach((vert, v_index) => {

            let face_count = 0
            let edge_count = 0
            let average_face_centers = new Vec3(0, 0, 0)
            let average_edge_centers = new Vec3(0, 0, 0)
            let average_edge_midpoints = new Vec3(0, 0, 0)
            
            this.Faces.forEach((f, findex)=>{ 
                if(f.includes(v_index)){
                    face_count += 1
                    average_face_centers = average_face_centers.add(this.FaceCenters[findex])
                }
            })

            this.Edges.forEach((e, eindex) => {
                if(e.includes(v_index)){
                    edge_count += 1
                    average_edge_centers = average_edge_centers.add(this.EdgeCenters[eindex])
                    let midpoint = new Vec3(0, 0, 0)
                    midpoint = midpoint.add(this.Vertices[e[0]])
                    midpoint = midpoint.add(this.Vertices[e[1]])
                    midpoint = midpoint.scale(1/2)
                    average_edge_midpoints = average_edge_midpoints.add(midpoint)
                }
            })
            
            average_face_centers = average_face_centers.scale(1/face_count)
            average_edge_midpoints = average_edge_midpoints.scale(1/edge_count)

            console.log(average_face_centers)
            console.log(average_edge_midpoints)

            let valence = edge_count
            let vertex = average_face_centers.scale(1/valence)
            vertex = vertex.add(average_edge_midpoints.scale(2/valence))
            vertex = vertex.add(vert.scale((valence-3)/valence))

            new_vertices.push(vertex)

        })

        this.UpdateSmoothFaces(new_vertices)

    }

    UpdateSmoothFaces(new_vertices : Array<Vec3>){

        let smooth_vertices: Array<Vec3> = []
        let flat_v: Array<number> = []
        let faces: Array<Array<number>> = []
        let indices: Array<number> = []

        this.Faces.forEach((f, findex)=>{
            for(let i = 0; i < f.length; i++){
                
                let edge_point_01 = this.EdgeCenters[this.FaceEdges[findex][i]]
                let next = i - 1
                if (i == 0) { next = f.length - 1 }
                let edge_point_02 = this.EdgeCenters[this.FaceEdges[findex][next]]
                let face_center = this.FaceCenters[findex]
                let v1 = new_vertices[f[i]]

                let vertices = [v1, edge_point_02, face_center, edge_point_01]
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
            let v0 = f[0]+1
            let v1 = f[1]+1
            let v2 = f[2]+1
            let v3 = f[3]+1
            data += "f " + v0.toString() + "//" + v0.toString() + " " + v1.toString() + "//" + v1.toString()
            data += " " + v2.toString() + "//" + v2.toString() + " " + v3.toString() + "//" + v3.toString() + "\n"
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