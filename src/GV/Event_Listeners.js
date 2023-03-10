/**
 * Event_Listeners.ts
 */

import {window_sizes} from './Global_variable.js'
import {canvas, camera, renderer,} from '../index.js'


window.addEventListener('resize', () => {
    //console.log('resized')
    //  update sizes
    window_sizes.width = window.innerWidth,
    window_sizes.height = window.innerHeight   

    //  update camera
    camera.aspect = window_sizes.width / window_sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(window_sizes.width, window_sizes.height)

})
window.addEventListener('dblclick', () => {
    // console.log('doble click')
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement
    if(!fullscreenElement)
    {
        if (canvas.requestFullscreen) 
        {
            // console.log('go full screen')
            canvas.requestFullscreen()
        }
        else if (canvas.webkitRequestFullscreen)
        {
            canvas.webkitRequestFullscreen()
        }
    }
    else
    {
        if(document.exitFullscreen)
        {
            document.exitFullscreen()
        // console.log('leave full screen')
        }
        else if (document.webkitExitFullscreen)
        {
            document.webkitExitFullscreen()
        }
    }
})

