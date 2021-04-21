function showField(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 1, 1, 5, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x2f1917} );
    const treeGeometry = new THREE.CylinderGeometry( 3, 2, 10, 32 );
    const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );

    for (let i = 2; i < 50; i++) {
        for (let j = 2; j < 49; j++) {
            const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
            cylinder.position.x = 400 + 25 * i;
            cylinder.position.z = 500 + (50) * j;
            cylinder.position.y = 10;
            scene.add( cylinder);
            // const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
            // cylinder2.position.x = 400 + 50 * i;
            // cylinder2.position.z = -150 + (-100) * i;
            // cylinder2.position.y = 10;
            // scene.add( cylinder2);

            const tree = new THREE.Mesh( treeGeometry, treeMaterial );
            tree.position.x = 400 + 25 * i;
            tree.position.z = 500 + 50 * j;
            tree.position.y = 15;
            scene.add( tree);
            // const tree2 = new THREE.Mesh( treeGeometry, treeMaterial );
            // tree2.position.x = 2090;
            // tree2.position.z = -150 + (-100) * i;
            // tree2.position.y = 35;
            // scene.add( tree2 );
        }
    }

    // showing the field ground 
    const loader = new THREE.TextureLoader();
    const groundTexture = loader.load( '../../img/grasslight-big.jpeg' );
	    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
	    groundTexture.repeat.set( 25, 25 );
	    groundTexture.anisotropy = 16;
	    groundTexture.encoding = THREE.sRGBEncoding;

		const groundMaterial = new THREE.MeshLambertMaterial( { map: groundTexture } );

		let mesh = new THREE.Mesh( new THREE.PlaneGeometry( 25 * 50, (2 * 25 * 50 ) - 150), groundMaterial );
		mesh.position.z = 1750;
		mesh.position.y = 5;
		mesh.position.x = 1025;
		mesh.rotation.x = - Math.PI / 2 ;
		mesh.receiveShadow = true;
		scene.add( mesh );
}