function showBoundryWall(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 3, 3, 50, 32 );
    const cylinderGeometry1 = new THREE.CylinderGeometry( 2, 2, 50, 32 );
    cylinderGeometry1.rotateX(Math.PI / 2);
    const cylinderGeometry2 = new THREE.CylinderGeometry( 2, 2, 50, 32 );
    cylinderGeometry2.rotateX(Math.PI / 2);
    cylinderGeometry2.rotateZ(Math.PI / 2);
    cylinderGeometry2.rotateY(Math.PI / 2);
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x6b7d8d} );    
    const cylinderMaterial1 = new THREE.MeshBasicMaterial( {color: 0x414e5e} );    
    for (let i = 1; i < 54; i++) {
        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 400;
        cylinder.position.z = 250 + 50 * i;
        cylinder.castShadow = true;
        scene.add( cylinder);
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder2.position.x = 400;
        cylinder2.position.z = 150 + (-50) * i;
        cylinder2.castShadow = true;
        scene.add( cylinder2);

        // for center line
        const cylinder3 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder3.position.x = 400;
        cylinder3.position.z = 120 + (-50) * i;
        cylinder3.position.y = 10;
        cylinder3.castShadow = true;
        scene.add( cylinder3);

        const cylinder4 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder4.position.x = 400;
        cylinder4.position.z = 120 + (-50) * i;
        cylinder4.position.y = 15;
        cylinder4.castShadow = true;
        scene.add( cylinder4);

        const cylinder5 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder5.position.x = 400;
        cylinder5.position.z = 120 + (-50) * i;
        cylinder5.position.y = 20;
        cylinder5.castShadow = true;
        scene.add( cylinder5);

        const cylinder6 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder6.position.x = 400;
        cylinder6.position.z = 275 + 50 * i;
        cylinder6.position.y = 10;
        cylinder6.castShadow = true;
        scene.add( cylinder6);

        const cylinder7 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder7.position.x = 400;
        cylinder7.position.z = 275 + 50 * i;
        cylinder7.position.y = 15;
        cylinder7.castShadow = true;
        scene.add( cylinder7);

        const cylinder8 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder8.position.x = 400;
        cylinder8.position.z = 275 + 50 * i;
        cylinder8.position.y = 20;
        cylinder8.castShadow = true;
        scene.add( cylinder8);
    }

    for (let i = 1; i < 60; i++) {
        // for border 2

        const cylinder9 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder9.position.x = 350 + 50 * i;
        cylinder9.position.z = 300 + 50 * 53;
        cylinder9.castShadow = true;
        scene.add( cylinder9);

        const cylinder10 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial1 );
        cylinder10.position.x = 375 + 50 * i;
        cylinder10.position.z = 300 + 50 * 53;
        cylinder10.position.y = 10;
        cylinder10.castShadow = true;
        scene.add( cylinder10);

        const cylinder11 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial1 );
        cylinder11.position.x = 375 + 50 * i;
        cylinder11.position.z = 300 + 50 * 53;
        cylinder11.position.y = 15;
        cylinder11.castShadow = true;
        scene.add( cylinder11);

        const cylinder12 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial1 );
        cylinder12.position.x = 375 + 50 * i;
        cylinder12.position.z = 300 + 50 * 53;
        cylinder12.position.y = 20;
        cylinder12.castShadow = true;
        scene.add( cylinder12);

        // for border 3
        const cylinder13 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder13.position.x = 350 + 50 * i;
        cylinder13.position.z = - (-100 + 50 * 53);
        cylinder13.castShadow = true;
        scene.add( cylinder13);

        const cylinder14 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial1 );
        cylinder14.position.x = 375 + 50 * i;
        cylinder14.position.z = - (-100 + 50 * 53);
        cylinder14.position.y = 10;
        cylinder14.castShadow = true;
        scene.add( cylinder14);

        const cylinder15 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial1 );
        cylinder15.position.x = 375 + 50 * i;
        cylinder15.position.z = - (-100 + 50 * 53);
        cylinder15.position.y = 15;
        cylinder15.castShadow = true;
        scene.add( cylinder15);

        const cylinder16 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial1 );
        cylinder16.position.x = 375 + 50 * i;
        cylinder16.position.z = - (-100 + 50 * 53);
        cylinder16.position.y = 20;
        cylinder16.castShadow = true;
        scene.add( cylinder16);

    }

    // border 4
    addBorder4(scene);
}

function addBorder4(scene) {
    for (let i = 1; i < 62; i++) {
    const cylinderGeometry = new THREE.CylinderGeometry( 3, 3, 50, 32 );
    const cylinderGeometry1 = new THREE.CylinderGeometry( 2, 2, 50, 32 );
    cylinderGeometry1.rotateX(Math.PI / 2);
    const cylinderGeometry2 = new THREE.CylinderGeometry( 2, 2, 50, 32 );
    cylinderGeometry2.rotateX(Math.PI / 2);
    cylinderGeometry2.rotateZ(Math.PI / 2);
    cylinderGeometry2.rotateY(Math.PI / 2);
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x6b7d8d} );    
    const cylinderMaterial1 = new THREE.MeshBasicMaterial( {color: 0x414e5e} );  

    const cylinder17 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder17.position.x = 400 + 50 * 59;
        cylinder17.position.z = -(-100 + 50 * i);
        scene.add( cylinder17);

        const cylinder18 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder18.position.x = 400 + 50 * 59;
        cylinder18.position.z = - (-125 + 50 * i);
        cylinder18.position.y = 10;
        scene.add( cylinder18);

        const cylinder19 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1);
        cylinder19.position.x = 400 + 50 * 59;
        cylinder19.position.z = - (-125 + 50 * i);
        cylinder19.position.y = 15;
        scene.add( cylinder19);

        const cylinder20 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder20.position.x = 400 + 50 * 59;
        cylinder20.position.z = - (-125 + 50 * i);
        cylinder20.position.y = 20;
        scene.add( cylinder20);

        // border 4 part 2

        const cylinder21 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder21.position.x = 400 + 50 * 59;
        cylinder21.position.z = (-100 + 50 * i);
        scene.add( cylinder21);

        const cylinder22 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder22.position.x = 400 + 50 * 59;
        cylinder22.position.z = (-125 + 50 * i);
        cylinder22.position.y = 10;
        scene.add( cylinder22);

        const cylinder23 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1);
        cylinder23.position.x = 400 + 50 * 59;
        cylinder23.position.z = (-125 + 50 * i);
        cylinder23.position.y = 15;
        scene.add( cylinder23);

        const cylinder24 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
        cylinder24.position.x = 400 + 50 * 59;
        cylinder24.position.z = (-125 + 50 * i);
        cylinder24.position.y = 20;
        scene.add( cylinder24);
    }
}