
/*
*   DEBUG
*/

import * as dat from 'dat.gui';

export function DEBUG () {
    const gui = new dat.GUI({closed: true, width: 400})
   return gui
}

export function addToDEBUG (gui, mesh, material) {

    const FolderPosition = gui.addFolder('position')
    FolderPosition.add(mesh.position, 'x').min(-3).max(3).step(0.01).name('position-X')
    FolderPosition.add(mesh.position, 'y').min(-3).max(3).step(0.01).name('position-Y')
    FolderPosition.add(mesh.position, 'z').min(-3).max(3).step(0.01).name('position-Z')
    FolderPosition.open()

    const FolderRotation = gui.addFolder('rotation')
    FolderRotation.add(mesh.rotation, 'x').min(-3).max(3).step(0.01).name('rotation-X')
    FolderRotation.add(mesh.rotation, 'y').min(-3).max(3).step(0.01).name('rotation-Y')
    FolderRotation.add(mesh.rotation, 'z').min(-3).max(3).step(0.01).name('rotation-Z')
    FolderRotation.open()

    const Folderscale = gui.addFolder('scale')
    Folderscale.add(mesh.scale, 'x').min(-3).max(3).step(0.01).name('scale-X')
    Folderscale.add(mesh.scale, 'y').min(-3).max(3).step(0.01).name('scale-Y')
    Folderscale.add(mesh.scale, 'z').min(-3).max(3).step(0.01).name('scale-Z')
    Folderscale.open()

    // gui.add(material, 'wireframe')

}