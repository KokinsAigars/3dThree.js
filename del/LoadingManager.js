/**
 * Loading Manager
 */

import * as THREE from 'three';

export function LoadingManager () {

    const LoadingManager = new THREE.LoadingManager();

    LoadingManager.onStart = () => {
        console.log('loading started')
    }
    LoadingManager.onProgress = () => {
        console.log('Progress')
    }
    LoadingManager.onError = () => {
        console.log('on Error')
    }

    return LoadingManager
}