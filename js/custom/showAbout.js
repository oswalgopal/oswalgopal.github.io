function showAbout(scene) {
    showAboutBanner(scene);
}


function showAboutBanner(scene) {
    const about = [
        {
            name: 'React Native',
            image: '../../img/about/About 1.png'
        },
        {
            name: 'React Native',
            image: '../../img/about/About 2.png'
        },
        {
            name: 'React Native',
            image: '../../img/about/About 3.png'
        },
    ]
    const cylinderGeometry = new THREE.CylinderGeometry( 2, 3, 200, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xd7dcdf} );    
    const treeGeometry = new THREE.CylinderGeometry( 2, 2, 50, 32 );
    const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );

    for (let i = 0 ; i < about.length; i++) {
        let skillBoardImg = [
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(about[i].image), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(about[i].image), side: THREE.DoubleSide}),
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
        skillBoard.position.y = 40;
        scene.add( skillBoard);

        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 2500 + (200 * i ) + 30;
        cylinder.position.z = i % 2 === 0 ? 50 : 350;
        scene.add( cylinder);
        const cylinder1 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder1.position.x = 2500 + (200 * i) - 30; 
        cylinder1.position.z = i % 2 == 0 ? -50 : 450;
        scene.add( cylinder1);
        
        // const cylinder2 = new THREE.Mesh( treeGeometry, cylinderMaterial );
        // cylinder2.rotation.x = i % 2 == 0  ? -Math.PI / 4 : Math.PI / 4;
        // cylinder2.rotation.z = i % 2 == 0  ? Math.PI / 2 : Math.PI / 4;
        // cylinder2.position.x = 2500 + (200 * i ) + 30;
        // cylinder2.position.z = i % 2 === 0 ? 30 : 350;
        // cylinder2.position.y = 120;
        // scene.add( cylinder2);
        // const cylinder3 = new THREE.Mesh( treeGeometry, cylinderMaterial );
        // cylinder3.position.x = 2500 + (200 * i) - 30; 
        // cylinder3.position.z = i % 2 == 0 ? -50 : 450;
        // cylinder3.position.y = 100;
        // scene.add( cylinder3);
    }
}