function showSquare(scene) {
    const squareGeometry = new THREE.CircleGeometry( 390, 150 );
    // var squareGeometry = new THREE.PlaneGeometry(200, 200, 100, 100);
    const squareMaterial = new THREE.MeshBasicMaterial( { color: 0x4c5161, side: THREE.DoubleSide } );
    const square = new THREE.Mesh( squareGeometry, squareMaterial );
    square.rotation.x = Math.PI / 2;
    square.position.x = 1800;
    square.position.z = 200;
    square.position.y = 4;
    scene.add( square );

    const squareGeometry1 = new THREE.CircleGeometry( 400, 150 );
    // var squareGeometry = new THREE.PlaneGeometry(200, 200, 100, 100);
    const squareMaterial1 = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
    const square1 = new THREE.Mesh( squareGeometry1, squareMaterial1 );
    square1.rotation.x = Math.PI / 2;
    square1.position.x = 1800;
    square1.position.z = 200;
    square1.position.y = 3;
    scene.add( square1 );

    // const squareGeometry2 = new THREE.CircleGeometry( 200, 150 );
    const squareGeometry2 = new THREE.CylinderGeometry( 150, 200, 50, 32 );
    const squareMaterial2 = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
    const square2 = new THREE.Mesh( squareGeometry2, squareMaterial2 );
    // square2.rotation.x = Math.PI / 2;
    square2.position.x = 1800;
    square2.position.z = 200;
    square2.position.y = 5;
    scene.add( square2 );
    // showTrees(scene);
    showSquareBoard(scene);
}

function showSquareBoard(scene) {
    const squareBoardGeometry = new THREE.CylinderGeometry( 15, 20, 350, 32 );
    const squareBoardMaterial = new THREE.MeshBasicMaterial( { color: 0xbabbbf, side: THREE.DoubleSide } );
    const squareBoard = new THREE.Mesh( squareBoardGeometry, squareBoardMaterial );
    // square2.rotation.x = Math.PI / 2;
    squareBoard.position.x = 1800;
    squareBoard.position.z = 200;
    squareBoard.position.y = 5;
    scene.add( squareBoard );

    // const BannerBoardMaterial = new THREE.MeshBasicMaterial( { color: 0x008e3f } );
    var BannerBoard = [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/directionPlain.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./img/directionPlain.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/directionPlain.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/directionPlain.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/directionBack.png'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/direction.png'), side: THREE.DoubleSide}),
    ]
    var BannerBoardMaterial = new THREE.MeshFaceMaterial(BannerBoard);
    const BannerBoardGeometry = new THREE.Mesh( new THREE.BoxGeometry( 300, 250, 45 ), BannerBoardMaterial );
    BannerBoardGeometry.rotation.y = Math.PI / 2;
    BannerBoardGeometry.position.x = 1800;
    BannerBoardGeometry.position.y = 300;
    BannerBoardGeometry.position.z = 200;
    scene.add( BannerBoardGeometry );

    // showText(scene);
}



function showText(scene) {
    const textLoader = new THREE.FontLoader();
		textLoader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {

        const textGeo = new THREE.TextGeometry( "^ABOUT  ME", {
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

        const textMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff, side: THREE.DoubleSide } );

        const text = new THREE.Mesh( textGeo, textMaterial );
        text.rotation.y = -Math.PI / 2;
        text.position.x = 1780;
        text.position.y = 400;
        text.position.z = 100;

        // mesh.castShadow = true;
        // mesh.receiveShadow = true;
        scene.add( text );

        // text 2
        const textGeo1 = new THREE.TextGeometry( "-> SKILLS & \n PROJECTS", {
            font: font,
            size: 20,
            height: 5,
            // curveSegments: 12,
            // bevelThickness: 2,
            // bevelSize: 1,
            // bevelEnabled: true
        }
        );

        textGeo1.computeBoundingBox();
        // const centerOffset = - 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );

        const text1 = new THREE.Mesh( textGeo1, textMaterial );
        text1.rotation.y = -Math.PI / 2;
        text1.position.x = 1780;
        text1.position.y = 270;
        text1.position.z = 100;

        // mesh.castShadow = true;
        // mesh.receiveShadow = true;
        scene.add( text1 );


        // text 3
        const textGeo2 = new THREE.TextGeometry( "<- WORK & \n ACHIEVEMENTS", {
            font: font,
            size: 20,
            height: 5,
            // curveSegments: 12,
            // bevelThickness: 2,
            // bevelSize: 1,
            // bevelEnabled: true
        }
        );

        textGeo2.computeBoundingBox();
        // const centerOffset = - 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );

        const text2 = new THREE.Mesh( textGeo2, textMaterial );
        text2.rotation.y = -Math.PI / 2;
        text2.position.x = 1780;
        text2.position.y = 200;
        text2.position.z = 100;

        // mesh.castShadow = true;
        // mesh.receiveShadow = true;
        scene.add( text2 );

        });
}

function showTrees(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 2, 5, 100, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x2f1917} );
    const treeGeometry = new THREE.CylinderGeometry( 10, 30, 100, 32 );
    const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );

    for (let i = 1; i < 10; i++) {
        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 1800 + 100 * i;
        cylinder.position.z = 100;
        scene.add( cylinder);
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder2.position.x = 1800 + 100 * i;
        cylinder2.position.z = 300;
        scene.add( cylinder2);

        const tree = new THREE.Mesh( treeGeometry, treeMaterial );
        tree.position.x = 1800 + 100 * i;
        tree.position.z = 100;
        tree.position.y = 80;
        scene.add( tree);
        const tree2 = new THREE.Mesh( treeGeometry, treeMaterial );
        tree2.position.x = 1800 + 100 * i;
        tree2.position.z = 300;
        tree2.position.y = 80;
        scene.add( tree2 );
    }
}
