import './style.css'
import * as THREE from 'three'
import { GeometryQuads } from "./GeometryQuads"
import {Vec3} from "./Vec3"
import { ThreadedRing } from './ThreadedRing'
import { visualizer } from './visualizer'


export class ThreadedRingMesh {

    Mesh: THREE.Mesh
    QuadMesh: GeometryQuads
    Geometry: THREE.BufferGeometry
    Material: THREE.MeshPhongMaterial
    WaveCount: number = 0
    SmoothCount: number = 0
    SegmentCount: number = 37
    Ring: ThreadedRing
    Environment: visualizer
    Wireframe: boolean = true
    Edges: THREE.LineSegments
    MidSectionFactor: number = 1


    constructor (environment : visualizer, material: THREE.MeshPhongMaterial){

        this.Ring = new ThreadedRing(this.SegmentCount)
        this.Material = material
        this.Environment = environment

        this.QuadMesh = new GeometryQuads(this.Ring.Geometry.Vertices, this.Ring.Geometry.Faces)
        this.QuadMesh.Buffer.computeVertexNormals()

        this.Geometry = this.QuadMesh.Buffer
        this.Mesh = new THREE.Mesh(this.Geometry, this.Material)
        this.Environment.scene.add(this.Mesh)

        let edges = new THREE.EdgesGeometry( this.Mesh.geometry ); 
        this.Edges = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );

        if (this.Wireframe){
            this.Environment.scene.add(this.Edges)
        }

    }


    UpdateMesh(){

        this.QuadMesh = new GeometryQuads(this.Ring.Geometry.Vertices, this.Ring.Geometry.Faces)
        this.QuadMesh.Smooth_Count = this.SmoothCount
        let smoothed = this.QuadMesh.smooth_geometry()

        this.Environment.scene.remove(this.Mesh)

        if (this.Environment.scene.getObjectById(this.Edges.id) != undefined){
            this.Environment.scene.remove(this.Edges)
        }

        console.log(this.Material)

        this.Geometry = smoothed.Buffer
        this.Geometry.computeVertexNormals()
        this.Mesh = new THREE.Mesh(this.Geometry, this.Material)
        
        this.Environment.scene.add(this.Mesh)

        let edges = new THREE.EdgesGeometry( this.Mesh.geometry ); 
        this.Edges = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );

        if (this.Wireframe){
            this.Environment.scene.add(this.Edges)
        }

    }


    UpdateMidSection(){
        
        this.Ring.MidSectionFactor = this.MidSectionFactor
        this.Ring.FormBase()
        this.UpdateMesh()

    }


    UpdateWaveCount(){

        this.Ring.WaveCount = this.WaveCount
        this.Ring.FormBase()
        this.UpdateMesh()

    }


    UpdateSegmentCount(){

        this.Ring.Segments = this.SegmentCount
        this.Ring.FormBase()
        this.UpdateMesh()

    }


    Download(){

        this.UpdateMesh()
        let smoothed = this.QuadMesh.smooth_geometry()
        smoothed.Download(this.Material)

    }


}