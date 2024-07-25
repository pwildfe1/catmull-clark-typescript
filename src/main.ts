import './style.css'
import * as THREE from 'three'
import { GeometryQuads } from "./GeometryQuads"
import { visualizer } from './visualizer'

const environment = new visualizer();
environment.controls.addEventListener('change', function(){environment.headlight_update()})

// Add Lights
const light = new THREE.AmbientLight( 0x404040, 1000 ); // soft white light
environment.scene.add( light );
let mat = new THREE.MeshStandardMaterial({color: 0x00ff00})
mat.metalness = 0.5
mat.roughness = 0.1
const lambert = new THREE.MeshLambertMaterial({color: new THREE.Color("rgb(255, 255, 0)"), side: 2})
const wireframe = new THREE.MeshBasicMaterial({color: new THREE.Color("rgb(255, 0, 0)"), wireframe: true})

let vertices = [
  new THREE.Vector3(-1, -1, -1), new THREE.Vector3(1, -1, -1), new THREE.Vector3(1, 1, -1), new THREE.Vector3(-1, 1, -1),
  new THREE.Vector3(-1, -1, 1), new THREE.Vector3(1, -1, 1), new THREE.Vector3(1, 1, 1), new THREE.Vector3(-1, 1, 1)
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
custom_geo.smooth_geometry()
let lvl01 = custom_geo.Catmull
lvl01.smooth_geometry()
let lvl02 = lvl01.Catmull
lvl02.smooth_geometry()
let lvl03 = lvl02.Catmull
lvl03.smooth_geometry()

const smoothed = new THREE.Mesh(lvl02.Catmull.Buffer, wireframe)
environment.scene.add(smoothed)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    environment.camera.aspect = window.innerWidth / window.innerHeight
    environment.camera.updateProjectionMatrix()
    environment.renderer.setSize(window.innerWidth, window.innerHeight)
    environment.render()
}

function animate() {
    requestAnimationFrame(animate)
    environment.render()
}

animate()