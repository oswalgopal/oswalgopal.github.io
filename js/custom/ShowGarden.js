function showGarden(scene) {
        // green ground 
        const groundMaterial = new THREE.MeshBasicMaterial( {color: 0x00bd22} );
		let mesh = new THREE.Mesh( new THREE.PlaneGeometry( 23 * 50, (2 * 25 * 50 ) - 150), groundMaterial );
		mesh.position.z = -1300;
		mesh.position.y = 5;
		mesh.position.x = 2750;
		mesh.rotation.x = - Math.PI / 2 ;
		mesh.receiveShadow = true;
		scene.add( mesh );


        // white ground 
        const groundMaterial2 = new THREE.MeshBasicMaterial( {color: 0xffffff} );
		let mesh2 = new THREE.Mesh( new THREE.PlaneGeometry( 24 * 50, (2 * 26 * 50 ) - 150), groundMaterial2 );
		mesh2.position.z = -1300;
		mesh2.position.y = 3;
		mesh2.position.x = 2750;
		mesh2.rotation.x = - Math.PI / 2 ;
		mesh2.receiveShadow = true;
		scene.add( mesh2 );

        // cemented ground 
        const groundMaterial3 = new THREE.MeshBasicMaterial( {color: 0xd3d3d3} );
		let mesh3 = new THREE.Mesh( new THREE.PlaneGeometry( 15 * 50, (2 * 18 * 50 ) - 150), groundMaterial3 );
		mesh3.position.z = -1300;
		mesh3.position.y = 6;
		mesh3.position.x = 2750;
		mesh3.rotation.x = - Math.PI / 2 ;
		mesh3.receiveShadow = true;
		scene.add( mesh3 );

        showBenches(scene);
        showSmallTrees(scene);
        showSquareTrees(scene);
        dustbin(scene);
}

function showBenches(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 2, 2, 20, 32 );
    const BenchMaterial = new THREE.MeshBasicMaterial( {color: 0x2f1917} );
    for (let i = 0; i < 4; i++) {
        const foot1 = new THREE.Mesh( cylinderGeometry, BenchMaterial );
        foot1.position.x = 2400;
        foot1.position.z = -800 + (-300) * i;
        foot1.position.y = 10;
        scene.add( foot1);
        const foot2 = new THREE.Mesh( cylinderGeometry, BenchMaterial );
        foot2.position.x = 2400;
        foot2.position.z = -800 + (-300) * i + (-50);
        foot2.position.y = 10;
        scene.add(foot2);
        const benchBase = new THREE.Mesh( new THREE.BoxGeometry( 80, 20, 3 ), BenchMaterial );
		benchBase.position.x = 2400;
		benchBase.position.y = 20;
		benchBase.position.z = -800 + (-300) * i  + (-25);
        benchBase.rotation.x = Math.PI / 2 ;
        benchBase.rotation.z = Math.PI / 2 ;
        scene.add(benchBase)
    }


    for (let i = 0; i < 4; i++) {
        const foot1 = new THREE.Mesh( cylinderGeometry, BenchMaterial );
        foot1.position.x = 3100;
        foot1.position.z = -800 + (-300) * i;
        foot1.position.y = 10;
        scene.add( foot1);
        const foot2 = new THREE.Mesh( cylinderGeometry, BenchMaterial );
        foot2.position.x = 3100;
        foot2.position.z = -800 + (-300) * i + (-50);
        foot2.position.y = 10;
        scene.add(foot2);
        const benchBase = new THREE.Mesh( new THREE.BoxGeometry( 80, 20, 3 ), BenchMaterial );
		benchBase.position.x = 3100;
		benchBase.position.y = 20;
		benchBase.position.z = -800 + (-300) * i  + (-25);
        benchBase.rotation.x = Math.PI / 2 ;
        benchBase.rotation.z = Math.PI / 2 ;
        scene.add(benchBase)
    }

    for (let i = 0; i < 5; i++) {
        const foot1 = new THREE.Mesh( cylinderGeometry, BenchMaterial );
        foot1.position.x = 2750 - 25;
        foot1.position.z = -700 + (-300) * i;
        foot1.position.y = 10;
        scene.add( foot1);
        const foot2 = new THREE.Mesh( cylinderGeometry, BenchMaterial );
        foot2.position.x = 2750 + 25;
        foot2.position.z = -700 + (-300) * i;
        foot2.position.y = 10;
        scene.add(foot2);
        const benchBase = new THREE.Mesh( new THREE.BoxGeometry( 80, 20, 3 ), BenchMaterial );
		benchBase.position.x = 2750;
		benchBase.position.y = 20;
		benchBase.position.z = -700 + (-300) * i;
        benchBase.rotation.x = Math.PI / 2 ;
        // benchBase.rotation.z = Math.PI / 2 ;
        scene.add(benchBase)
    }
}

function showSquareTrees(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 3, 3, 40, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x2f1917} );
    const treeGeometry = new THREE.BoxGeometry( 30, 30, 40 );
    const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );

    for (let i = 1; i < 5; i++) {
        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 2550;
        cylinder.position.z = -550 + (-300) * i;
        cylinder.position.y = 10;
        scene.add( cylinder);
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder2.position.x = 2925;
        cylinder2.position.z = -550 + (-300) * i;
        cylinder2.position.y = 10;
        scene.add( cylinder2);

        const tree = new THREE.Mesh( treeGeometry, treeMaterial );
        tree.position.x = 2550;
        tree.position.z = -550 + -300 * i;
        tree.position.y = 30;
        scene.add( tree);
        const tree2 = new THREE.Mesh( treeGeometry, treeMaterial );
        tree2.position.x = 2925;
        tree2.position.z = -550 + (-300) * i;
        tree2.position.y = 30;
        scene.add( tree2 );
    }
}

function showSmallTrees(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 1, 3, 40, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x2f1917} );
    const treeGeometry = new THREE.CylinderGeometry( 5, 10, 30, 32 );
    const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );
    const treeMaterial2 = new THREE.MeshBasicMaterial({color: 0x097828})
    const treeMaterial3 = new THREE.MeshBasicMaterial({color: 0x75dc13})

    for (let i = 1; i < 23; i++) {
        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 2300;
        cylinder.position.z = -150 + (-100) * i;
        cylinder.position.y = 10;
        scene.add( cylinder);
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder2.position.x = 3200;
        cylinder2.position.z = -150 + (-100) * i;
        cylinder2.position.y = 10;
        scene.add( cylinder2);

        const tree = new THREE.Mesh( treeGeometry, treeMaterial );
        tree.position.x = 2300;
        tree.position.z = -150 + -100 * i;
        tree.position.y = 30;
        scene.add( tree);
        const tree2 = new THREE.Mesh( treeGeometry, treeMaterial );
        tree2.position.x = 3200;
        tree2.position.z = -150 + (-100) * i;
        tree2.position.y = 30;
        scene.add( tree2 );

        const tree3 = new THREE.Mesh( treeGeometry, treeMaterial2 );
        tree3.position.x = 2300;
        tree3.position.z = -150 + -100 * i;
        tree3.position.y = 45;
        scene.add( tree3);
        const tree4 = new THREE.Mesh( treeGeometry, treeMaterial2 );
        tree4.position.x = 3200;
        tree4.position.z = -150 + (-100) * i;
        tree4.position.y = 45;
        scene.add( tree4 );


        const tree5 = new THREE.Mesh( treeGeometry, treeMaterial3 );
        tree5.position.x = 2300;
        tree5.position.z = -150 + -100 * i;
        tree5.position.y = 60;
        scene.add( tree5);
        const tree6 = new THREE.Mesh( treeGeometry, treeMaterial3 );
        tree6.position.x = 3200;
        tree6.position.z = -150 + (-100) * i;
        tree6.position.y = 60;
        scene.add( tree6 );
    }
}

function dustbin(scene) {
    let dustbinImg = [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/dustbin.jpeg'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/dustbin.jpeg'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/dustbin.jpeg'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/dustbin.jpeg'), side: THREE.DoubleSide}),
    ]
    var dustbinrMaterial = new THREE.MeshFaceMaterial(dustbinImg);
    // const dustbinrMaterial = new THREE.MeshBasicMaterial( {color: 0x2f1917} );
    const dustbinGeometry = new THREE.BoxGeometry( 20, 20, 20 );
    const dustbin = new THREE.Mesh( dustbinGeometry, dustbinrMaterial );
    dustbin.position.x = 2400;
    dustbin.position.z = -500;
    dustbin.position.y = 15;
    scene.add( dustbin);

    const dustbin1 = new THREE.Mesh( dustbinGeometry, dustbinrMaterial );
    dustbin1.position.x = 3100;
    dustbin1.position.z = -500;
    dustbin1.position.y = 15;
    scene.add( dustbin1);

    const dustbin2 = new THREE.Mesh( dustbinGeometry, dustbinrMaterial );
    dustbin2.position.x = 2400;
    dustbin2.position.z = -2100;
    dustbin2.position.y = 15;
    scene.add( dustbin2);

    const dustbin3 = new THREE.Mesh( dustbinGeometry, dustbinrMaterial );
    dustbin3.position.x = 3100;
    dustbin3.position.z = -2100;
    dustbin3.position.y = 15;
    scene.add( dustbin3);
}