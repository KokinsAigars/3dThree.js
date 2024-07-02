

import * as THREE from 'three';

//Create Sphere
export function Sphere (material) {
    const Sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 16, 16),
        material
    )
    return Sphere
}