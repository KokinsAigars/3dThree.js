

/**
 * Images
 * native javascript loading image
 * 
 */ import IMG_Color from './Textures/IMG_Color.jpg'; //_log(IMG_Color)
   
 
 
 /** Textures
     */
    // const image = new Image()
    // image.src = IMG_Color;
    // const texture_A = new THREE.Texture(image)
    // image.onload = () => {
    //     texture_A.needsUpdate = true;
    // }

    
/**
 * Textures
 */
import imageSource1 from './images.jpg'
import imageSource2 from './image2.jpg'

const textureLoader = new THREE.TextureLoader(LoadingManager)
const texture_A = textureLoader.load (
    IMG_Color,
    // function load () {
    //     console.log('load')
    // },
    // function progress () {
    //     console.log('progress')
    // },
    // function error () {
    //     console.log('error')
    // },
)



const textureB = textureLoader.load(imageSource2)
// textureB.repeat.x = 3
// textureB.repeat.y = 3
// textureB.wrapS = THREE.RepeatWrapping
// textureB.wrapT = THREE.MirroredRepeatWrapping
// textureB.offset.x = 0.5
// // textureB.minFilter = THREE.NearestFilter
// // textureB.magFilter = THREE.NearestFilter
// textureB.magFilter = THREE.LinearFilter

// const colorTexture = textureLoader.load('/textures/checkerboard-1024x1024.png')
// const colorTexture = textureLoader.load('/textures/checkerboard-2x2.png')
// const colorTexture = textureLoader.load(
//     '/textures/minecraft.png',
//     () =>
//     {
//         console.log('textureLoader: loading finished')
//     },
//     () =>
//     {
//         console.log('textureLoader: loading progressing')
//     },
//     () =>
//     {
//         console.log('textureLoader: loading error')
//     }
// )
// const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
// const heightTexture = textureLoader.load('/textures/door/height.jpg')
// const normalTexture = textureLoader.load('/textures/door/normal.jpg')
// const ambientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
// const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
// const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')


