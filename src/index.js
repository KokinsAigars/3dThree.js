
//  *
//  *   Project Name: "Vides Formas 3D (3dThree.js)"
//  *   Organization: VIVENTE
//  *   Built on 2024.07.02
//  *   Contributor(s): Aigars Kokins
//  *
//  *   [index.js]
//  *

import ('./GV/Event_Listeners');
import {window_sizes} from './GV/Global_variable.js';

import * as THREE from 'three';
import {OrbitControls} from  'three/examples/jsm/controls/OrbitControls.js';

import {Create_DoDEC} from './Objects/DodecahedronGeometry.js';
import {mat_Basic} from './Materials/MeshBasicMaterial.js';

export let canvas;
export let scene;
export let camera;
export let controls;
export let renderer;
export let light;

init();             // Initialize
RelTimeRender();    // Rel Time Render enable orbit
GEO_A ();           // tests for standard geometry and simple materials

// Initialize
function init() {

    canvas = document.querySelector('canvas.webgl'); //_log(canvas)

    scene  = new THREE.Scene();

    // camera = new THREE.PerspectiveCamera(75, window_sizes.width / window_sizes.height);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3
    camera.position.y = -1
    // camera.position.z = 25
    scene.add(camera);

    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    // controls.maxPolarAngle = Math.PI / 2;
    controls.enabled = true

    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        // powerPreference: 'high-performance',
        antialias: true
    })
    renderer.setClearColor( 0xffffff, 0)
    // renderer.setSize(window_sizes.width, window_sizes.height)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); //pixel ratio not biger than 2

    light = new THREE.DirectionalLight(0xffffff, 0.5, 1000)
    light.position.set(0, 15, 15)
    scene.add(light);
}

// Rel Time Render enable orbit
function RelTimeRender() {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(RelTimeRender)
}

function GEO_A() {

    const LoadingManager = new THREE.LoadingManager();

    const mat_basic = mat_Basic("gray", "", true);

    const DoDEC = Create_DoDEC(mat_basic)
    DoDEC.position.y = 1
    // DoDEC.geometry.setAttribute('positionX', 2)
    scene.add(DoDEC)

}
//
//
// // Create the Three.js Scene
// var scene = new THREE.Scene();
//
// // Create a new Perspective Camera
// var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
// camera.position.z = 25;
//
// // Create a Full Screen WebGL Renderer
// var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
// renderer.setClearColor("#DDDDDD");
// renderer.setSize(window.innerWidth,window.innerHeight);
//
// document.body.appendChild(renderer.domElement);
//
// // Make sure the project is responsive based on window resizing
// window.addEventListener('resize', () => {
//     renderer.setSize(window.innerWidth,window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;
//
//     camera.updateProjectionMatrix();
// })
//
// // Add a light
// var light = new THREE.PointLight(0xFFFFFF, 1.4, 1000)
// light.position.set(0,15,15);
// scene.add(light);
//
// // Defining a variable for our two models
// var ourObj;
// var ourObj2;
//
// // Create a material
// var mtlLoader = new THREE.MTLLoader();
// mtlLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/glass.mtl', function (materials) {
//
//     materials.preload();
//
//     // Load the object
//     var objLoader = new THREE.OBJLoader();
//     objLoader.setMaterials(materials);
//     objLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/glass.obj', function (object) {
//         scene.add(object);
//         ourObj = object;
//         object.position.z -= 370;
//         object.rotation.x = 250;
//
//     });
// });
//
// // Create a material
// var mtlLoader = new THREE.MTLLoader();
// mtlLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/center.mtl', function (materials) {
//
//     materials.preload();
//
//     // Load the object
//     var objLoader = new THREE.OBJLoader();
//     objLoader.setMaterials(materials);
//     objLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/center.obj', function (object) {
//         scene.add(object);
//         ourObj2 = object;
//         object.position.z -= 70;
//         object.rotation.x = 250;
//
//         this.tl = new TimelineMax();
//         this.tl.from(ourObj2.scale, 2, {y: 0, x:0, z: 0, ease: Expo.easeOut})
//         this.tl.from(ourObj2.position, 2, {y: 0, z: -30,  ease: Expo.easeOut})
//         this.tl.from(ourObj.scale, 2, {x: 1.5, y: 1.5, z: 0, ease: Expo.easeOut}, '-=2')
//         this.tl.from(ourObj.position, 1, {y: -20, ease: Expo.easeOut}, '-=3')
//     });
// });
//
//
//
//
// var render = function() {
//     requestAnimationFrame(render);
//
//     // Rotate the objects indefinitely
//     ourObj.rotation.z -= .01;
//     ourObj2.rotation.z += .03;
//
//     renderer.render(scene, camera);
// }
//
// // Call this to render the entire scene
// render();
