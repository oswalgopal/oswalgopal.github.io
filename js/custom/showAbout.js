function showAbout(scene) {
    showAboutBanner(scene);
}


function showAboutBanner(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 3, 5, 100, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xd7dcdf} );    
    const treeGeometry = new THREE.CylinderGeometry( 10, 30, 100, 32 );
    const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );

    for (let i = 0 ; i < 4; i++) {
        let skillBoardImg = [
            // new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(skills[i].image), side: THREE.DoubleSide}),
            // new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(skills[i].image), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        ]
        var skillBoardMaterial = new THREE.MeshFaceMaterial(skillBoardImg);
        const skillBoard = new THREE.Mesh(new THREE.BoxGeometry(10, 80, 150), skillBoardMaterial);
        skillBoard.rotation.y = i % 2 == 0  ? -100 : 100;
        skillBoard.position.x = 2500 + 200 * i;
        skillBoard.position.z = i % 2 == 0  ? 0 : 400;
        skillBoard.position.y = 50;
        scene.add( skillBoard);

        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        skillBoard.position.x = 2500 + 200 * i;
        cylinder.position.z = 90;
        scene.add( cylinder);
        const cylinder1 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        skillBoard.position.x = 2500 + 200 * i;
        cylinder1.position.z = 70;
        scene.add( cylinder1);
        
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        skillBoard.position.x = 2500 + 200 * i;
        cylinder2.position.z = 310;
        scene.add( cylinder2);
        const cylinder3 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        skillBoard.position.x = 2500 + 200 * i;
        cylinder3.position.z = 330;
        scene.add( cylinder3);
    }
}