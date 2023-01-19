/**
 * Global variables
 */

export const _log = console.log;

// Sizes 
export const window_sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

export const parameters = {
    color: "rgb(150, 10, 87)",
    spin: (mesh) => 
    {
        // console.log('spin')
        mesh.rotation.y += 10
    }
}