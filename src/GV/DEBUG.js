


/*
*   DEBUG
*/
const gui = new dat.GUI({closed: true, width: 400})


//DEBUG
if(true){
    gui.addColor(parameters, 'color').onChange(() => {
        // console.log('change')
        material.color.set(parameters.color)
    })
    gui.add(mesh.position, 'y').min(-3).max(3).step(0.01)
    gui.add(mesh.position, 'y').min(-3).max(3).step(0.01)
    gui.add(mesh.position, 'z', -3, 3, 0.01)
    
    gui.add(mesh.rotation, 'x').min(-3).max(3).step(0.01).name('rotation-X')
    gui.add(mesh.rotation, 'y').min(-3).max(3).step(0.01).name('rotation-Y')
    gui.add(mesh.rotation, 'z').min(-3).max(3).step(0.01).name('rotation-Z')
    
    gui.add(mesh, 'visible')
    
    gui.add(material, 'wireframe')
    
    gui.add(parameters, 'spin')
    }