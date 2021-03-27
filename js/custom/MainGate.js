function showMainGate(scene) {

    const cylinderGeometry = new THREE.CylinderGeometry( 5, 4, 300, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
    cylinder.position.x = 400;
    cylinder.position.z = 100;
    cylinder.castShadow = true;
    cylinder.receiveShadow = true; //default
    scene.add( cylinder);
    const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
    cylinder2.position.x = 400;
    cylinder2.position.z = 300;
    scene.add( cylinder2);

    const BannerBoardMaterial = new THREE.MeshBasicMaterial( { color: 0xbabbbf } );
    const BannerBoardGeometry = new THREE.Mesh( new THREE.BoxGeometry( 300, 50, 20 ), BannerBoardMaterial );
    BannerBoardGeometry.rotation.y = Math.PI / 2;
    BannerBoardGeometry.position.x = 400;
    BannerBoardGeometry.position.y = 150;
    BannerBoardGeometry.position.z = 200;
    scene.add( BannerBoardGeometry ); 

    // adding text

    const textLoader = new THREE.FontLoader();
		textLoader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {

        const textGeo = new THREE.TextGeometry( "WELCOME", {
            font: font,
            size: 20,
            height: 5,
            // curveSegments: 12,
            // bevelThickness: 2,
            // bevelSize: 1,
            // bevelEnabled: true
        } 
        );

        textGeo.computeBoundingBox();
        // const centerOffset = - 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );

        const textMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff } );

        const text = new THREE.Mesh( textGeo, textMaterial );
        text.rotation.y = - Math.PI / 2;
        text.position.x = 390;
        text.position.y = 135;
        text.position.z = 130;

        // mesh.castShadow = true;
        // mesh.receiveShadow = true;
        scene.add( text );
        });
}