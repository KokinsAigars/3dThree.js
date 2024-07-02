/**
 *  Three.js tests for 3d web
 * 
 *  2023.01.
 */

/**
 * Styles
 */ import './_styles/style.scss'; 

/**
 * Event listeners
 */ import ('./GV/Event_Listeners');
/**
 * Global variables
 */ import {_log, window_sizes} from './GV/Global_variable.js';
    import {LoadingManager} from './GV/LoadingManager.js';
    import {DEBUG, addToDEBUG} from './GV/DEBUG.js';

/**
 * Three.js library && components
 */ import * as THREE from 'three';
    import {OrbitControls} from  'three/examples/jsm/controls/OrbitControls.js'; 
    import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/**
 * Objects
 */ import {BOX} from './Objects/BoxGeometry.js';
    import {Sphere} from './Objects/SphereGeometry.js';
    import {Create_Plane} from './Objects/PlaneGeometry.js';
    import {Create_TorusKnot} from './Objects/TorusKnotGeometry.js';
    import {Create_DoDEC} from './Objects/DodecahedronGeometry.js';

/**
 * Materials
 */ import {mat_Basic} from './Materials/MeshBasicMaterial.js';


export let canvas;
export let scene;
export let camera;
export let controls;
export let renderer;

init();             // Initialize
RelTimeRender();    // Rel Time Render enable orbit
// UCS ();             // show ucs coordinate system
GEO_A ();           // tests for standard geometry and simple materials

// Initialize
function init() {
    
    /** Canvas
     */ canvas = document.querySelector('canvas.webgl'); //_log(canvas)
    
    /** Scene
     */ scene  = new THREE.Scene();

    /** Camera
     */ camera = new THREE.PerspectiveCamera(75, window_sizes.width / window_sizes.height);
        camera.position.z = 3
        scene.add(camera);

    /** ORBIT Controls
     */ controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true
        // controls.maxPolarAngle = Math.PI / 2;
        controls.enabled = true

    /** Renderer 
    */  renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
            // powerPreference: 'high-performance',
            // antialias: true
        })
        renderer.setClearColor( 0xffffff, 0)
        renderer.setSize(window_sizes.width, window_sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); //pixel ratio not biger than 2

}
// Rel Time Render enable orbit
function RelTimeRender() {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(RelTimeRender)
}
// UCS on/off
function UCS () {
    const axesHelper = new THREE.AxesHelper(); 
    scene.add(axesHelper)
}
// tests for standard geometry
function GEO_A() {

    /** Loading Manager
     */
        const LoadingManager = new THREE.LoadingManager();
        LoadingManager.onStart = () => {
            _log('loading started')
        };
        LoadingManager.onLoaded = () => {
            _log('loading finished')
        };
        LoadingManager.onProgress = () => {
            _log('loading progressing')
        };
        LoadingManager.onError = () => {
            _log('loading error')
        };
    /**
     * Textures
     */
        const textureLoader = new THREE.TextureLoader(LoadingManager)
        const texture_diffuse = textureLoader.load('Img/grey_dirt_with_stones_4_diffuse.png')
        const texture_glossiness = textureLoader.load('Img/grey_dirt_with_stones_4_glossiness.png')
        const texture_height = textureLoader.load('Img/grey_dirt_with_stones_4_height.png')
        const texture_normal = textureLoader.load('Img/grey_dirt_with_stones_4_normal.png')
        const texture_reflection = textureLoader.load('Img/grey_dirt_with_stones_4_reflection.png')

        texture_diffuse.repeat.x = 2;
        texture_diffuse.repeat.y = 3;
        texture_diffuse.wrapS = THREE.RepeatWrapping;
        texture_diffuse.wrapT = THREE.RepeatWrapping;
        // texture_diffuse.wrapS = THREE.MirroredRepeatWrapping;
        // texture_diffuse.wrapT = THREE.MirroredRepeatWrapping;
        texture_diffuse.offset.x = 0.5;
        texture_diffuse.offset.y = 0.5;
        texture_diffuse.center.x = 0.5;
        texture_diffuse.center.y = 0.5;
        texture_diffuse.rotation = Math.PI / 2; //in radians
        // texture_diffuse.minFilter = THREE.NearestFilter; //sharp textures
        // texture_diffuse.minFilter = THREE.LinearFilter;
        texture_diffuse.minFilter = THREE.LinearMipMapLinearFilter; //default minmap filter (texture filter)
        texture_diffuse.generateMipmaps = true //switch off texture minmaps for lower reolution versions. needs to be True. smaller texture versions for gpu is better. false if tugether with nearest filter for performance
    
        /** Materials
    */
        // const mat_basic_A = mat_Basic("", texture_A, false);
        const mat_basic_B = mat_Basic("gray", texture_diffuse, false);
        const mat_basic_C = mat_Basic("gray", "", false);

    /** Group
        */
        // const group_A = new THREE.Group()
        // scene.add(group_A)

    /** Objects
    */
        // const BOX_A = BOX(mat_basic_A);
        // scene.add(BOX_A)
        // group_A.add(BOX_A)

        // const Plane_A = Create_Plane(mat_basic_B)
        //     Plane_A.rotation.x = -Math.PI * 0.5 //rotation in radians
        // scene.add(Plane_A)

        // const TorusKnot = Create_TorusKnot(mat_basic_C)
        //     TorusKnot.position.x = 1.5
        // scene.add(TorusKnot)

        const DoDEC = Create_DoDEC(mat_basic_C)
            DoDEC.position.y = 1
            // DoDEC.geometry.setAttribute('positionX', 2)
        scene.add(DoDEC)

    /** Debug
    */
    // const newDEBUG = DEBUG (); 
    // addToDEBUG (newDEBUG, DoDEC)

}