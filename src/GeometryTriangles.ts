import * as THREE from 'three'


export class GeometryTriangles {

    Vertices: Array<THREE.Vector3> = []
    Faces: Array<Array<number>> = []
    Edges: Array<Array<number>> = []
    FaceEdges: Array<Array<number>> = []
    Buffer: THREE.BufferGeometry = new THREE.BufferGeometry()
    Catmull: THREE.BufferGeometry = new THREE.BufferGeometry()

    private FaceCenters: Array<THREE.Vector3> = []
    private EdgeCenters: Array<THREE.Vector3> = []
    private v: Array<number> = []
    private indices: Array<number> = []

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
            
            let edge_indices = [-1, -1, -1]
            let edges = [[f[0], f[1]], [f[0], f[2]], [f[1], f[2]]]

            edges.forEach((e, index)=>{
                let included = false
                for(let i = 0; i < this.Edges.length; i++){
                    if(this.Edges[i].includes(e[0]) && this.Edges[i].includes(e[1])){
                        console.log(this.Edges[i])
                        console.log(e)
                        edge_indices[index] = i
                        included = true
                        break
                    }
                }
                if (included == false) {
                    edge_indices[index] = this.Edges.length
                    let edge_center = new THREE.Vector3(0, 0, 0)
                    edge_center.add(this.Vertices[e[0]])
                    edge_center.add(this.Vertices[e[1]])
                    this.EdgeCenters.push(edge_center.multiplyScalar(0.5))
                    this.Edges.push(e)
                }
            })

            this.FaceEdges.push(edge_indices)

            let center = new THREE.Vector3(0, 0, 0)
            center.add(this.Vertices[f[0]])
            center.add(this.Vertices[f[1]])
            center.add(this.Vertices[f[2]])
            this.FaceCenters.push(new THREE.Vector3(center.x/3, center.y/3, center.z/3))
            this.indices.push(...[f[0],f[1],f[2]])

        })
        
        this.Buffer.setIndex(this.indices)
        this.Buffer.setAttribute( 'position', new THREE.BufferAttribute( new Float32Array(this.v), 3 ) )

        console.log(this.FaceEdges)
    }


    smooth_geometry(){

        let new_vertices: Array<THREE.Vector3> = []

        this.Vertices.forEach((v, v_index) => {
            let face_count = 0
            let edge_count = 0
            let average_face_centers = new THREE.Vector3(0, 0, 0)
            let average_edge_centers = new THREE.Vector3(0, 0, 0)
            this.Faces.forEach((f, findex)=>{ 
                if(f.includes(v_index)){
                    face_count += 1
                    average_face_centers.add(this.FaceCenters[findex])
                    this.FaceEdges[findex].forEach(e => {
                        if(this.Edges[e].includes(v_index)){
                            edge_count += 1
                            average_edge_centers.add(this.EdgeCenters[e])
                        }
                    })
                }
            })
            average_face_centers.multiplyScalar(1/face_count)
            average_edge_centers.multiplyScalar(1/edge_count)
            let vertex = new THREE.Vector3(0 , 0, 0)
            vertex.add(average_face_centers)
            vertex.add(average_edge_centers.multiplyScalar(2))
            vertex.add(v.multiplyScalar(face_count-3))
            vertex.multiplyScalar(1/face_count)
            new_vertices.push(vertex)
        })

        let smooth_vertices: Array<THREE.Vector3> = []
        let flat_v: Array<number> = []
        let indices: Array<number> = []

        this.Faces.forEach((f, findex)=>{
            let v1 = new_vertices[f[0]]
            let v2 = new_vertices[f[1]]
            let v3 = new_vertices[f[2]]

            let e1 = this.EdgeCenters[this.FaceEdges[findex][0]]
            let e2 = this.EdgeCenters[this.FaceEdges[findex][1]]
            let e3 = this.EdgeCenters[this.FaceEdges[findex][2]]

            // let face01 = [e1, v1, this.FaceCenters[findex]]
            // let face02 = [e2, v2, this.FaceCenters[findex]]
            // let face03 = [e3, v3, this.FaceCenters[findex]]
            // let face04 = [e1, e2, e3]
            // let face05 = [e1, e3, this.FaceCenters[findex]]

            let face01 = [this.FaceCenters[findex], e1, v1]
            // let face02 = [e1, v2, this.FaceCenters[findex]]

            let vertices = []
            vertices.push(...face01)
            // vertices.push(...face02)
            // vertices.push(...face03)
            // vertices.push(...face04)
            // vertices.push(...face05)

            vertices.forEach(v => {
                let included = false
                smooth_vertices.forEach((s, sindex) => {
                    if (v.distanceTo(s) < 0.001){
                        indices.push(sindex)
                        included = true
                    }
                })
                if (included == false){
                    indices.push(smooth_vertices.length)
                    smooth_vertices.push(v)
                    flat_v.push(...[v.x, v.y, v.z])
                }
            })
        })
        
        this.Catmull.setIndex(indices)
        this.Catmull.setAttribute( 'position', new THREE.BufferAttribute( new Float32Array(flat_v), 3 ) )
    }


}