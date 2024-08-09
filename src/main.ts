import './style.css'
import * as THREE from 'three'
import { visualizer } from './visualizer'
import {GUI} from "dat.gui";
import { ThreadedRingMesh } from './ThreadedRingMesh'
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';

const gui = new GUI()
const environment = new visualizer();
environment.controls.addEventListener('change', function(){environment.headlight_update()})
environment.scene.background = new THREE.Color(0xFAF9F6)

// Add Lights
const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
environment.scene.add( light );

const ground: Reflector = new Reflector(
  new THREE.PlaneGeometry( 2000, 2000 ),
  {
      color: new THREE.Color(0xFAF9F6),
      textureWidth: window.innerWidth * window.devicePixelRatio,
      textureHeight: window.innerHeight * window.devicePixelRatio,
  }
)

ground.rotation.x = - Math.PI / 2;
ground.position.y = -.25;
ground.receiveShadow = true;

const ground_blur = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshPhongMaterial({color: 0xFAF9F6, transparent:true}))

ground_blur.rotation.x = - Math.PI / 2;
ground_blur.position.y = 0;
ground_blur.material.opacity = 0.75;
ground_blur.material.needsUpdate = true;

let reflect = .75
let emi = .1
let mat = new THREE.MeshPhongMaterial({color: 0xD9B665, transparent: true, emissive: 0xD9B665, emissiveIntensity: emi, reflectivity: reflect, side: 2})

const envTexture = new THREE.CubeTextureLoader().load([
  'px.png',
  'nx.png',
  'py.png',
  'ny.png',
  'pz.png',
  'nz.png'
])
envTexture.mapping = THREE.CubeReflectionMapping
mat.envMap = envTexture

environment.scene.add( ground );
environment.scene.add(ground_blur);
environment.scene.fog = new THREE.Fog( 0xcccccc, 50, 100 );

environment.renderer.toneMapping = THREE.ACESFilmicToneMapping;
environment.renderer.toneMappingExposure = 0.85;

const myThreadedMesh = new ThreadedRingMesh(environment, mat)

gui.add(myThreadedMesh, "SmoothCount", 0, 1, 1).onChange(function(){
  myThreadedMesh.UpdateMesh()
})
gui.add(myThreadedMesh, "WaveCount", 0, 2, .5).onChange(function(){
  myThreadedMesh.UpdateWaveCount()
})
gui.add(myThreadedMesh, "SegmentCount", 25, 41, 1).onChange(function(){
  myThreadedMesh.UpdateSegmentCount()
})
gui.add(myThreadedMesh, "Diameter", 13, 20, .5).onChange(function(){
  myThreadedMesh.UpdateDiameter()
})
gui.add(myThreadedMesh, "MidSectionFactor", .5, 1.5, .1).onChange(function(){
  myThreadedMesh.UpdateMidSection()
})
gui.add(myThreadedMesh, "Download").listen()

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