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


}