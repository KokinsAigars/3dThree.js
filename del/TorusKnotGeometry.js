/**
 * TorusKnotGeometry(radius : Float, tube : Float, tubularSegments : Integer, radialSegments : Integer, p : Integer, q : Integer)
*   radius - Radius of the torus. Default is 1.
*   tube — Radius of the tube. Default is 0.4.
*   tubularSegments — Default is 64.
*   radialSegments — Default is 8.
*   p — This value determines, how many times the geometry winds around its axis of rotational symmetry. Default is 2.
*   q — This value determines, how many times the geometry winds around a circle in the interior of the torus. Default is 3.
 */


import * as THREE from 'three';


//Create Torus Knot Geometry
export function Create_TorusKnot (material) {
    const geometry = new THREE.TorusKnotGeometry( 1, 0,4, 64, 8 );
    const torusKnot = new THREE.Mesh( geometry, material );
    return torusKnot;
}  