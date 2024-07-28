import './style.css'
import * as THREE from 'three'
import { GeometryQuads } from "./GeometryQuads"
import {Vec3} from "./Vec3"
import { visualizer } from './visualizer'
import {GUI} from "dat.gui";

const gui = new GUI()
const environment = new visualizer();
environment.controls.addEventListener('change', function(){environment.headlight_update()})

// Add Lights
const light = new THREE.AmbientLight( 0xffffff ); // soft white light
// const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
environment.scene.add( light );

environment.scene.fog = new THREE.Fog( 0xcccccc, 50, 100 );
environment.renderer.toneMapping = THREE.ACESFilmicToneMapping;
environment.renderer.toneMappingExposure = 0.85;

let mat = new THREE.MeshStandardMaterial({color: 0x00ff00, side: 2})
mat.metalness = 0.5
mat.roughness = 0.1
const lambert = new THREE.MeshLambertMaterial({color: new THREE.Color("rgb(255, 255, 0)"), side: 2})
const wireframe = new THREE.MeshBasicMaterial({color: new THREE.Color("rgb(255, 0, 0)"), wireframe: true})

const vertices = [
  new Vec3(-5, -5, -5), new Vec3(5, -5, -5), new Vec3(5, 5, -5), new Vec3(-5, 5, -5),
  new Vec3(-5, -5, 5), new Vec3(5, -5, 5), new Vec3(5, 5, 5), new Vec3(-5, 5, 5)
]

let faces = [
  [0, 1, 2, 3],
  [0, 1, 5, 4],
  [1, 2, 6, 5],
  [2, 3, 7, 6],
  [3, 0, 4, 7],
  [4, 5, 6, 7]
]


const custom_geo = new GeometryQuads(vertices, faces)
let smoothed_geo = new GeometryQuads(vertices, faces)
let smoothed = new THREE.Mesh(smoothed_geo.Buffer, mat)

environment.scene.add(smoothed)

gui.add(smoothed_geo, 'Download').onChange(function(){})
gui.add(smoothed_geo, 'Download_Quads').onChange(function(){})
gui.add(custom_geo, 'Smooth_Count', 0, 2, 1).onChange(function(){
  if (custom_geo.Smooth_Count > 0){
    smoothed_geo = custom_geo.smooth_geometry()
  } else {
    smoothed_geo = new GeometryQuads(custom_geo.Vertices, custom_geo.Faces)
  }
  environment.scene.remove(smoothed)
  smoothed_geo.Buffer.computeVertexNormals()
  smoothed = new THREE.Mesh(smoothed_geo.Buffer, mat)
  environment.scene.add(smoothed)
})

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    environment.camera.aspect = window.innerWidth / window.innerHeight
    environment.camera.updateProjectionMatrix()
    environment.renderer.setSize(window.innerWidth, window.innerHeight)
    environment.render()
}

function animate(){
    requestAnimationFrame(animate)
    environment.render()
}

animate()