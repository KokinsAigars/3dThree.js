

import * as THREE from 'three';


//Create BOX
export function BOX (material) {
    // Object
    const geometry = new THREE.BoxGeometry(1, 1, 1, 4,4,2)
    const mesh = new THREE.Mesh(geometry, material)
    return mesh
}


// // Object
// const geometry = new THREE.BoxGeometry(1, 1, 1, 4,4,2)
// const material = new THREE.MeshBasicMaterial({ map: textureB })
// const materialB = new THREE.MeshBasicMaterial({ 
//     color: parameters.color,
//     wireframe: true 
// })
// const materialC = new THREE.MeshStandardMaterial()
// materialC.map = textureB
// // materialC.transparent = true
// // materialC.alphaMap = alphaTexture
