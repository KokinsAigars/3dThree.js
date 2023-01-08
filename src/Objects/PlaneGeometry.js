
/**
 * PlaneGeometry(width : Float, height : Float, widthSegments : Integer, heightSegments : Integer)
*   width — Width along the X axis. Default is 1.
*   height — Height along the Y axis. Default is 1.
*   widthSegments — Optional. Default is 1.
*   heightSegments — Optional. Default is 1.
 */

import * as THREE from 'three';

//Create Plane
export function Create_Plane (material) {
    const geometry = new THREE.PlaneGeometry( 5, 5, 1, 1 );
    const plane = new THREE.Mesh( geometry, material );
    return plane;
}