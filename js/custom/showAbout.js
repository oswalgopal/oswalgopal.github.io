function showAbout(scene) {
    showAboutBanner(scene);
}


function showAboutBanner(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 3, 5, 100, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xd7dcdf} );    
    const treeGeometry = new THREE.CylinderGeometry( 10, 30, 100, 32 );
    const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );

    for (let i = 0; i < 5; i++) {
        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 2300 + 150 * i;
        cylinder.position.z = 90;
        scene.add( cylinder);
        const cylinder1 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder1.position.x = 2300 + (150 * i) - 20;
        cylinder1.position.z = 70;
        scene.add( cylinder1);
        
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder2.position.x = 2350 + 150 * i;
        cylinder2.position.z = 310;
        scene.add( cylinder2);
        const cylinder3 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder3.position.x = 2350 + (150 * i) - 20;
        cylinder3.position.z = 330;
        scene.add( cylinder3);
    }
}