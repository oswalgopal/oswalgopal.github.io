function showMainRoad(scene) {

    // forward one
    var roadGeometry = new THREE.PlaneGeometry(1800, 200, 100, 100);
    var roadGeometryWhite = new THREE.PlaneGeometry(1800, 250, 100, 100);
    var roadGeometry1 = new THREE.PlaneGeometry(200, 3800, 100, 100);
    var roadGeometryWhite1 = new THREE.PlaneGeometry(250, 3500, 100, 100);

    roadGeometry.rotateX( - Math.PI / 2 );
    roadGeometryWhite.rotateX( - Math.PI / 2 );
    roadGeometry1.rotateX( - Math.PI / 2 );
    roadGeometryWhite1.rotateX( - Math.PI / 2 );

    const roadMaterial = new THREE.MeshBasicMaterial( {color: 0x4c5161, side: THREE.DoubleSide} );
    const roadMaterialWhite = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.position.x = 1300;
    road.position.z = 200;
    road.position.y = 2;
    scene.add(road);
    // const roadWhite = new THREE.Mesh(roadGeometryWhite, roadMaterialWhite);
    // roadWhite.position.x = 1300;
    // roadWhite.position.z = 200;
    // road.position.y = 2;
    // scene.add(roadWhite);
    scene.add(road);
    
    showRoadWhiteLines(scene);
    showLights(scene);
    showAboutOnRoadBanner(scene);

    // backward one
    const road1 = new THREE.Mesh(roadGeometry, roadMaterial);
    road1.position.x = 2400;
    road1.position.z = 200;
    road1.position.y = 2;
    scene.add(road1);

    // left one
    const road2 = new THREE.Mesh(roadGeometry1, roadMaterial);
    road2.position.z = 0;
    road2.position.x = 1800;
    road2.position.y = 2;
    scene.add(road2);

    // right one
    const road3 = new THREE.Mesh(roadGeometry1, roadMaterial);
    road3.position.z = 900;
    road3.position.x = 1800;
    road3.position.y = 2;
    scene.add(road3);
}

function showLights(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 2, 5, 100, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x2f1917} );    
    const treeGeometry = new THREE.CylinderGeometry( 10, 30, 100, 32 );
    const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );    

    for (let i = 1; i < 10; i++) {
        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 400 + 100 * i;
        cylinder.position.z = 100;
        scene.add( cylinder);
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder2.position.x = 400 + 100 * i;
        cylinder2.position.z = 300;
        scene.add( cylinder2);

        const tree = new THREE.Mesh( treeGeometry, treeMaterial );
        tree.position.x = 400 + 100 * i;
        tree.position.z = 100;
        tree.position.y = 80;
        scene.add( tree);
        const tree2 = new THREE.Mesh( treeGeometry, treeMaterial );
        tree2.position.x = 400 + 100 * i;
        tree2.position.z = 300;
        tree2.position.y = 80;
        scene.add( tree2 );
    }

    // for (let i = 1; i < 10; i++) {
    //     const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
    //     cylinder.position.x = 2100 + 100 * i;
    //     cylinder.position.z = 100;
    //     scene.add( cylinder);
    //     const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
    //     cylinder2.position.x = 2100 + 100 * i;
    //     cylinder2.position.z = 300;
    //     scene.add( cylinder2);

    //     const tree = new THREE.Mesh( treeGeometry, treeMaterial );
    //     tree.position.x = 2100 + 100 * i;
    //     tree.position.z = 100;
    //     tree.position.y = 80;
    //     scene.add( tree);
    //     const tree2 = new THREE.Mesh( treeGeometry, treeMaterial );
    //     tree2.position.x = 2100 + 100 * i;
    //     tree2.position.z = 300;
    //     tree2.position.y = 80;
    //     scene.add( tree2 );
    // }
}

function showRoadWhiteLines(scene){
    var roadGeometry = new THREE.PlaneGeometry(50, 10, 1, 1);
    var roadGeometry1 = new THREE.PlaneGeometry(10, 50, 1, 1);
    roadGeometry.rotateX( - Math.PI / 2 );
    roadGeometry1.rotateX( - Math.PI / 2 );
    const roadMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
    for (let i = 1; i < 20; i++) {
        const road = new THREE.Mesh(roadGeometry, roadMaterial);
        road.position.x = 400 + 150 * i;
        road.position.z = 200;
        road.position.y = 3;
        scene.add(road);
    }
    for (let i = 0 ; i < 31; i++){
        const road1 = new THREE.Mesh(roadGeometry1, roadMaterial);
        road1.position.x = 1800;
        road1.position.z = -1800 + 150 * i;
        road1.position.y = 3;
        scene.add(road1);
    }
}


function showAboutOnRoadBanner(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 1, 1, 50, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xd7dcdf} );    
    const treeGeometry = new THREE.CylinderGeometry( 10, 30, 50, 32 );
    const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );
    const cylinderMaterial1 = new THREE.MeshBasicMaterial( {color: 0xd7dcdf} );

    for (let i = 0; i < 3; i++) {
        let projectBoardImg = [
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(intro[i].image), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(intro[i].image), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        ]
        var projectBoardMaterial = new THREE.MeshFaceMaterial(projectBoardImg);

        if(i%2 ==0) {
            const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial1 );
            cylinder.position.x = 650 + 200 * i;
            cylinder.position.z = 120;
            scene.add( cylinder);
            const cylinder1 = new THREE.Mesh( cylinderGeometry, cylinderMaterial1 );
            cylinder1.position.x = 650 + (200 * i) + 20;
            cylinder1.position.z = 140;
            scene.add( cylinder1);

            const projectBoard = new THREE.Mesh(new THREE.BoxGeometry(5, 30, 50), projectBoardMaterial);
            projectBoard.rotation.y = Math.PI / 4;
            projectBoard.position.x = 660 + (200 * i);
            projectBoard.position.z = 130;
            projectBoard.position.y = 30;
            scene.add( projectBoard);

        } else {
            const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial1 );
            cylinder2.position.x = 650 + 200 * i;
            cylinder2.position.z = 270;
            scene.add( cylinder2);
            const cylinder3 = new THREE.Mesh( cylinderGeometry, cylinderMaterial1 );
            cylinder3.position.x = 650 + (200 * i) + 20;
            cylinder3.position.z = 250;
            scene.add( cylinder3);

            const projectBoard = new THREE.Mesh(new THREE.BoxGeometry(5, 30, 50), projectBoardMaterial);
            projectBoard.rotation.y = -Math.PI / 4;
            projectBoard.position.x = 660 + (200 * i);
            projectBoard.position.z = 260;
            projectBoard.position.y = 30;
            scene.add( projectBoard);
        }
    }
}


const intro = [
    {
        name: 'Builder Designs',
        image: '../../img/Intro/Intro 1.png',
    }, 
    {
        name: 'ULike',
        image: '../../img/Intro/Intro 2.png',
    },
    {
        name: 'Ravi K das',
        image: '../../img/Intro/Intro 3.png',
    }, 
]