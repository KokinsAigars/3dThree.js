

import * as THREE from 'three';

export function mat_Basic (string_color, bool_wireframe) {
    const material = new THREE.MeshBasicMaterial({ 
        color: string_color,
        wireframe: bool_wireframe
    })
    return material
}



// const material = new THREE.MeshBasicMaterial({ map: textureB })
// const materialB = new THREE.MeshBasicMaterial({ 
//     color: parameters.color,
//     wireframe: true 
// })
// const materialC = new THREE.MeshStandardMaterial()
// materialC.map = textureB
// // materialC.transparent = true
// // materialC.alphaMap = alphaTexture
