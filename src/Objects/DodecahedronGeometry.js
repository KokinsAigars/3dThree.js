/**
 * DodecahedronGeometry(radius : Float, detail : Integer)
*   radius — Radius of the dodecahedron. Default is 1.
*   detail — Default is 0. Setting this to a value greater than 0 adds vertices
 */

import * as THREE from 'three';


//Create DoDEC
export function Create_DoDEC (material){
    const geometry = new THREE.DodecahedronGeometry(1,0);
    const DoDEC = new THREE.Mesh( geometry, material );
    return DoDEC
}