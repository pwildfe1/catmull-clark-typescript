import './style.css'
import * as THREE from 'three'
import { GeometryQuads } from "./GeometryQuads"
import {Vec3} from "./Vec3"
import { visualizer } from './visualizer'
import {GUI} from "dat.gui";

const gui = new GUI()
const environment = new visualizer();
environment.controls.addEventListener('change', function(){environment.headlight_update()})
environment.scene.background = new THREE.Color(0xFAF9F6)

// Add Lights
const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
environment.scene.add( light );

// const dirLight01 = new THREE.DirectionalLight( 0xffffff, 5 )
// dirLight01.position.set( 0, 200, 100 )
// dirLight01.castShadow = true
// environment.scene.add( dirLight01 )

let reflect = .75
let emi = .1
let mat = new THREE.MeshPhongMaterial({color: 0xD9B665, transparent: true, emissive: 0xD9B665, emissiveIntensity: emi, reflectivity: reflect, side: 2})

// const envTexture = new THREE.CubeTextureLoader().load([
//   'px.png',
//   'nx.png',
//   'py.png',
//   'ny.png',
//   'pz.png',
//   'nz.png'
// ])
// envTexture.mapping = THREE.CubeReflectionMapping
// mat.envMap = envTexture

environment.scene.fog = new THREE.Fog( 0xcccccc, 50, 100 );
environment.renderer.toneMapping = THREE.ACESFilmicToneMapping;
environment.renderer.toneMappingExposure = 0.85;


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
let edges = new THREE.EdgesGeometry( smoothed.geometry ); 
let lines = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );

environment.scene.add(lines)
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

  environment.scene.remove(lines)
  edges = new THREE.EdgesGeometry( smoothed.geometry ); 
  lines = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
  environment.scene.add(lines)
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