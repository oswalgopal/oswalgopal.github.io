const skills = [
    {
        name: 'React Native',
        image: '../../img/skills/react native.png'
    },
    {
        name: 'ReactJs',
        image: '../../img/skills/react.png'
    },
    {
        name: 'Angular',
        image: '../../img/skills/angular.png'
    },
    {
        name: 'Ionic',
        image: '../../img/skills/ionic.png'
    },
    {
        name: 'Java',
        image: '../../img/skills/java.png'
    },
    {
        name: 'Python',
        image: '../../img/skills/python.png'
    },
    {
        name: 'Flask',
        image: '../../img/skills/flask.png'
    },
    {
        name: 'Django',
        image: '../../img/skills/django.png'
    },
    {
        name: 'Sql',
        image: '../../img/skills/sql.png'
    },
    {
        name: 'Node',
        image: '../../img/skills/node.png'
    },
    {
        name: 'mongodDb',
        image: '../../img/skills/mongodb.png'
    },
    {
        name: 'PS',
        image: '../../img/skills/PS.png'
    },
    {
        name: 'AI',
        image: '../../img/skills/AI.png'
    },
    {
        name: 'C++',
        image: '../../img/skills/cpp.png'
    },
    {
        name: 'GIT',
        image: '../../img/skills/git.png'
    },
    {
        name: 'GIT',
        image: '../../img/skills/git.png'
    },
    {
        name: 'GIT',
        image: '../../img/skills/git.png'
    },
    {
        name: 'GIT',
        image: '../../img/skills/git.png'
    },
    // {
    //     name: 'GIT',
    //     image: '../../img/skills/git.png'
    // },
];


function showSkills(scene) {
    showSmallTrees(scene);
    showCementedGround(scene);
    showSkillsBanner(scene);
    showStreetLamp(scene);
    showRoadText(scene);
    showHouses(scene);
    // showEnd(scene);
}


function showCementedGround(scene) {
    var cementedGroundGeometry = new THREE.PlaneGeometry(200, 3500, 100, 100);
    cementedGroundGeometry.rotateX( - Math.PI / 2 );

    var cementedGroundImg = [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/ground.jpeg'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./img/ground.jpeg'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/ground.jpeg'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/ground.jpeg'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('./img/ground.jpeg'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('../../img/ground.jpeg'), side: THREE.DoubleSide}),
    ]
    var cementedGroundMaterial = new THREE.MeshFaceMaterial(cementedGroundImg);

    // const cementedGroundMaterial = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
    const cementedGround = new THREE.Mesh(new THREE.BoxGeometry(200, 20, 1700), cementedGroundMaterial);
    cementedGround.position.x = 1600;
    cementedGround.position.z = -1050;
    cementedGround.position.y = 2;
    scene.add(cementedGround);
    const cementedGround1 = new THREE.Mesh(new THREE.BoxGeometry(200, 20, 1700), cementedGroundMaterial);
    cementedGround1.position.x = 2000;
    cementedGround1.position.z = -1050;
    cementedGround1.position.y = 2;
    scene.add(cementedGround1);
}


function showSkillsBanner(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 2, 5, 100, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x4c5161} );
    const treeGeometry = new THREE.CylinderGeometry( 10, 30, 100, 32 );
    const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );


    for (let i = 0; i < skills.length; i++) {
        if (i < 9) {
            const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
            cylinder.position.x = 1600;
            cylinder.position.z = -100 + (-200) * (i + 1);
            scene.add( cylinder);
            let skillBoardImg = [
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(skills[i].image), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(skills[i].image), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
            ]
            var skillBoardMaterial = new THREE.MeshFaceMaterial(skillBoardImg);
            const skillBoard = new THREE.Mesh(new THREE.BoxGeometry(10, 80, 150), skillBoardMaterial);
            skillBoard.rotation.y = 100;
            skillBoard.position.x = 1600;
            skillBoard.position.z = -100 + -200 * (i + 1);
            skillBoard.position.y = 80;
            scene.add( skillBoard);
        } else {
            const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
            cylinder2.position.x = 2000;
            cylinder2.position.z = -100 + (-200) * (i - 8);
            scene.add( cylinder2);
            let skillBoardImg = [
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(skills[i].image), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(skills[i].image), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
                new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
            ]
            var skillBoardMaterial = new THREE.MeshFaceMaterial(skillBoardImg);
            const skillBoard = new THREE.Mesh(new THREE.BoxGeometry(10, 80, 150), skillBoardMaterial);
            skillBoard.rotation.y = 180;
            skillBoard.position.x = 2000;
            skillBoard.position.z = -100 + (-200) * (i - 8);
            skillBoard.position.y = 80;
            scene.add( skillBoard);
        }
    }
}


function showEnd(scene) {
    let skillBoardImg = [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
    ]
    var skillBoardMaterial = new THREE.MeshFaceMaterial(skillBoardImg);
    const skillBoard = new THREE.Mesh(new THREE.BoxGeometry(10, 80, 150), skillBoardMaterial);
    skillBoard.rotation.y = 100;
    skillBoard.position.x = 1600;
    skillBoard.position.z = 1000;
    skillBoard.position.y = 80;
    scene.add( skillBoard);
}


function showSmallTrees(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 1, 3, 40, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x2f1917} );
    const treeGeometry = new THREE.CylinderGeometry( 5, 10, 30, 32 );
    const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );

    for (let i = 1; i < 18; i++) {
        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 1510;
        cylinder.position.z = -150 + (-100) * i;
        cylinder.position.y = 10;
        scene.add( cylinder);
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder2.position.x = 2090;
        cylinder2.position.z = -150 + (-100) * i;
        cylinder2.position.y = 10;
        scene.add( cylinder2);

        const tree = new THREE.Mesh( treeGeometry, treeMaterial );
        tree.position.x = 1510;
        tree.position.z = -150 + -100 * i;
        tree.position.y = 35;
        scene.add( tree);
        const tree2 = new THREE.Mesh( treeGeometry, treeMaterial );
        tree2.position.x = 2090;
        tree2.position.z = -150 + (-100) * i;
        tree2.position.y = 35;
        scene.add( tree2 );
    }
}

function showStreetLamp(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 0.5, 2, 150, 32 );
    const cylinderGeometry1 = new THREE.CylinderGeometry( 0.5, 0.5, 30, 32 );
    cylinderGeometry1.rotateX(Math.PI / 2);
    cylinderGeometry1.rotateY(Math.PI / 2);
    cylinderGeometry1.rotateZ(Math.PI / 4);

    const cylinderGeometry3 = new THREE.CylinderGeometry( 0.5, 0.5, 30, 32 );
    cylinderGeometry3.rotateX(Math.PI / 2);
    cylinderGeometry3.rotateY(Math.PI / 2);
    cylinderGeometry3.rotateZ(Math.PI * 3 / 4);

    const cylinderGeometry2 = new THREE.CylinderGeometry( 3, 3, 10, 32 );
    cylinderGeometry2.rotateX(Math.PI / 2);
    cylinderGeometry2.rotateY(Math.PI / 2);
    
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xd7dcdf} );
    // const cylinderMaterial1 = new THREE.MeshBasicMaterial( {color: 0xd7dcdf} );
    // const treeGeometry = new THREE.CylinderGeometry( 5, 10, 30, 32 );
    // const treeMaterial = new THREE.MeshBasicMaterial( {color: 0x0c5c05} );

    for (let i = 1; i < 18; i++) {
        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 1510;
        cylinder.position.z = -100 + (-100) * i;
        cylinder.position.y = 10;
        scene.add( cylinder);
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder2.position.x = 2090;
        cylinder2.position.z = -100 + (-100) * i;
        cylinder2.position.y = 10;
        scene.add( cylinder2);

        const lamp = new THREE.Mesh( cylinderGeometry1, cylinderMaterial );
        lamp.position.x = 1520;
        lamp.position.z = -100 + (-100) * i;
        lamp.position.y = 95;
        scene.add( lamp);
        const lamp1 = new THREE.Mesh( cylinderGeometry3, cylinderMaterial );
        lamp1.position.x = 2080;
        lamp1.position.z = -100 + (-100) * i;
        lamp1.position.y = 95;
        scene.add( lamp1);

        const lampLight = new THREE.Mesh( cylinderGeometry2, cylinderMaterial );
        lampLight.position.x = 1535;
        lampLight.position.z = -100 + (-100) * i;
        lampLight.position.y = 105;
        scene.add( lampLight);
        const lampLight1 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial );
        lampLight1.position.x = 2065;
        lampLight1.position.z = -100 + (-100) * i;
        lampLight1.position.y = 105;
        scene.add( lampLight1);


        // const width = 10;
        // const height = 10;
        // const intensity = 1;
        // const rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
        // rectLight.position.set( 1535, -100 + (-100) * i, 105 );
        // rectLight.lookAt( 1600, -100 + (-100) * i, 105 );
        // scene.add( rectLight )

        // const rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
        // rectLight.add( rectLightHelper );



        // const cylinder3 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial );
        // cylinder3.position.x = 1510;
        // cylinder3.position.z = -100 + (-100) * i;
        // cylinder3.position.y = 40;
        // scene.add( cylinder3);
        // const cylinder4 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial );
        // cylinder4.position.x = 2090;
        // cylinder4.position.z = -100 + (-100) * i;
        // cylinder4.position.y = 40;
        // scene.add( cylinder4);

        // const tree = new THREE.Mesh( treeGeometry, treeMaterial );
        // tree.position.x = 1510;
        // tree.position.z = -150 + -50 * i;
        // tree.position.y = 35;
        // scene.add( tree);
        // const tree2 = new THREE.Mesh( treeGeometry, treeMaterial );
        // tree2.position.x = 2090;
        // tree2.position.z = -150 + (-50) * i;
        // tree2.position.y = 35;
        // scene.add( tree2 );
    }
}


function showRoadText(scene){
    const textLoader = new THREE.FontLoader();
    textLoader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {

    const textGeo = new THREE.TextGeometry( "MY SKILLS", {
        font: font,
        size: 15,
        height: 5,
        // curveSegments: 12,
        // bevelThickness: 2,
        // bevelSize: 1,
        // bevelEnabled: true
    } 
    );

    textGeo.computeBoundingBox();
    // const centerOffset = - 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );

    const textMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff,
        // specular: 0xffffff
    } );

    const text = new THREE.Mesh( textGeo, textMaterial );
    text.rotation.x = (Math.PI  * 3 / 2) - 150;
    text.position.x = 1750;
    text.position.y = 10;
    text.position.z = -200;

    // mesh.castShadow = true;
    // mesh.receiveShadow = true;
    scene.add( text );
    });
}


function showHouses(scene) {
    const img = [
        {path: '../../img/building/building1.png'},
        {path: '../../img/building/building2.png'},
        {path: '../../img/building/building3.png'},
        {path: '../../img/building/building4.png'},
        {path: '../../img/building/building5.png'},
        {path: '../../img/building/building1.png'},
        {path: '../../img/building/building2.png'},
        {path: '../../img/building/building3.png'},
        {path: '../../img/building/building4.png'},
        {path: '../../img/building/building5.png'},
    ]
    for(let i = 0 ; i < 8; i++) {
        // const HouseMaterial = new THREE.MeshBasicMaterial( { color: 0x6b7d8d } );
        const no = Math.floor(Math.random() * 6) + 1  ;
        let buildingImg = [
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(img[no].path), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(img[no].path), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(img[no].path), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(img[no].path), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(img[no].path), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(img[no].path), side: THREE.DoubleSide}),
        ]
        var HouseMaterial = new THREE.MeshFaceMaterial(buildingImg);
        const House = new THREE.Mesh(new THREE.BoxGeometry(100, 1000 + 400 * Math.random(), 150 + 100 * Math.random()), HouseMaterial);
        // House.position.x = 500 + 1000 * Math.random();
        // House.position.z = -300  - 200 * (i + 1);
        House.position.x = 1200;
        House.position.z = - 300 * (i + 1);
        House.position.y = 0;
        scene.add( House);
    }

    for(let i = 0 ; i < 8; i++) {
        const no = Math.floor(Math.random() * 6) + 1  ;
        // const HouseMaterial = new THREE.MeshBasicMaterial( { color: 0x6b7d8d } );
        let buildingImg = [
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(img[no].path), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(img[no].path), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(img[no].path), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(img[no].path), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(img[no].path), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(img[no].path), side: THREE.DoubleSide}),
        ]
        var HouseMaterial = new THREE.MeshFaceMaterial(buildingImg);
        const House = new THREE.Mesh(new THREE.BoxGeometry(100, 1000 + 400 * Math.random(), 150 + 100 * Math.random()), HouseMaterial);
        // House.position.x = 500 + 1000 * Math.random();
        // House.position.z = -300  - 200 * (i + 1);
        House.position.x = 700;
        House.position.z = - 300 * (i + 1);
        House.position.y = 0;
        scene.add( House);
    }
}