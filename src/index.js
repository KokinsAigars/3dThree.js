
import './_styles/style.scss';
import ('./GV/Event_Listeners')
import {_log, sizes} from './GV/Global_variable.js'

import * as THREE from 'three'; //npm install three
import {OrbitControls} from  'three/examples/jsm/controls/OrbitControls.js'; 
import * as dat from 'dat.gui'; //npm i dat.gui

import {BOX} from './Objects/BoxGeometry.js'
import {Sphere} from './Objects/SphereGeometry.js'
import {mat_Basic} from './Materials/MeshBasicMaterial.js'


export const canvas = document.querySelector('canvas.webgl');   //_log('1. new canvas created')
export const scene = new THREE.Scene();                         //_log('2. new scene created')
export const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)
camera.position.z = 3

// Controls - ORBIT
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.maxPolarAngle = Math.PI / 2
controls.enabled = true




const mat_basic_A = mat_Basic("rgb(150, 100, 87)", true);        // _log('3. new material created')
const BOX_A = BOX(mat_basic_A);                                 //_log('4. new Box created')
scene.add(BOX_A)

/*
*   DEBUG
*/
const gui = new dat.GUI({closed: true, width: 400})


// //DEBUG
// gui.addColor(parameters, 'color').onChange(() => {
//     // console.log('change')
//     material.color.set(parameters.color)
// })
gui.add(camera.position, 'y').min(-3).max(3).step(0.01)
// gui.add(mesh.position, 'y').min(-3).max(3).step(0.01)
// gui.add(mesh.position, 'z', -3, 3, 0.01)

// gui.add(mesh.rotation, 'x').min(-3).max(3).step(0.01).name('rotation-X')
// gui.add(mesh.rotation, 'y').min(-3).max(3).step(0.01).name('rotation-Y')
// gui.add(mesh.rotation, 'z').min(-3).max(3).step(0.01).name('rotation-Z')

// gui.add(mesh, 'visible')

// gui.add(material, 'wireframe')

// gui.add(parameters, 'spin')













// Renderer
export const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); //pixel ratio not biger than 2


// REAL TIME RENDER 
export function RelTimeRender() {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(RelTimeRender)
}
RelTimeRender();