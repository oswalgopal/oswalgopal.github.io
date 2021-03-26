const projects = [
    {
        name: 'Builder Designs',
        image: '../../img/projects/Builder Design.png',
    }, 
    {
        name: 'ULike',
        image: '../../img/projects/Ulike.png',
    },
    {
        name: 'Ravi K das',
        image: '../../img/projects/Ravi K Das.png',
    }, 
    {
        name: 'Pai Pai Hisab',
        image: '../../img/projects/Pai Pai Hisab.png',
    }, 
    {
        name: 'KDS',
        image: '../../img/projects/KDS.png',
    }, 
    {
        name: 'OPM',
        image: '../../img/projects/OPM.png',
    }, 
    {
        name: 'Komal Bricks',
        image: '../../img/projects/Komal Bricks.png',
    },
    {
        name: 'KDERP',
        image: '../../img/projects/KDERP.png',
    },
    {
        name: 'MarkMate App',
        image: '../../img/projects/MarkMate App.png',
    },
    {
        name: 'Untap',
        image: '../../img/projects/Untap.png',
    },
    {
        name: 'Instago',
        image: '../../img/projects/Instago.png',
    },
    {
        name: 'Device Info',
        image: '../../img/projects/Device Info.png',
    },
    {
        name: 'Shool Art',
        image: '../../img/projects/School Art.png',
    },
    {
        name: 'Koetter Wood',
        image: '../../img/projects/Koetter Wood.png',
    },
    {
        name: 'Website Builder',
        image: '../../img/projects/Website Builder.png',
    },
    {
        name: 'XcellMart',
        image: '../../img/projects/XcellMart.png',
    },
    {
        name: 'Lets Connect',
        image: '../../img/projects/Lets Connect.png',
    },
    {
        name: 'NotesPedia',
        image: '../../img/projects/NotesPedia.png',
    },
    {
        name: 'Treblo',
        image: '../../img/projects/Treblo.png',
    },
    {
        name: 'Umate',
        image: '../../img/projects/Umate.png',
    },
    {
        name: 'Lazy Coder',
        image: '../../img/projects/Lazy Coder.png',
    },
];

function showProjects(scene) {
    // showProjectDirection(scene);
    const cylinderGeometry = new THREE.CylinderGeometry( 2, 2, 150, 32 );
    const cylinderGeometry1 = new THREE.CylinderGeometry( 0.5, 0.5, 30, 32 );
    cylinderGeometry1.rotateX(Math.PI / 2);
    cylinderGeometry1.rotateY(Math.PI / 2);
    cylinderGeometry1.rotateZ(Math.PI);

    const cylinderGeometry3 = new THREE.CylinderGeometry( 0.5, 0.5, 30, 32 );
    cylinderGeometry3.rotateX(Math.PI / 2);
    cylinderGeometry3.rotateY(Math.PI / 2);
    // cylinderGeometry3.rotateZ(Math.PI / 2);

    const cylinderGeometry2 = new THREE.CylinderGeometry( 3, 3, 10, 32 );
    cylinderGeometry2.rotateX(Math.PI / 2);
    cylinderGeometry2.rotateY(Math.PI / 2);
    
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xd7dcdf} );

    for (let i = 0; i < projects.length; i++) {
        let projectBoardImg = [
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(projects[i].image), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(projects[i].image), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        ]
        var projectBoardMaterial = new THREE.MeshFaceMaterial(projectBoardImg);
        if (i % 2 == 0) {
            const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
            cylinder.position.x = 1670;
            cylinder.position.z = 750 + (100) * i;
            cylinder.position.y = 10;
            scene.add( cylinder);
        
            const lamp = new THREE.Mesh( cylinderGeometry1, cylinderMaterial );
            lamp.position.x = 1685;
            lamp.position.z = 750 + (100) * i;
            lamp.position.y = 75;
            scene.add( lamp);

            const lamp3 = new THREE.Mesh( cylinderGeometry1, cylinderMaterial );
            lamp3.position.x = 1685;
            lamp3.position.z = 750 + (100) * i;
            lamp3.position.y = 65;
            scene.add( lamp3);

            const projectBoard = new THREE.Mesh(new THREE.BoxGeometry(5, 30, 50), projectBoardMaterial);
            projectBoard.rotation.y = Math.PI / 2;
            projectBoard.position.x = 1710;
            projectBoard.position.z = 750 + (100 * i);
            projectBoard.position.y = 70;
            scene.add( projectBoard);
        } else {
            const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
            cylinder2.position.x = 1930;
            cylinder2.position.z = 600 + (100) * i;
            cylinder2.position.y = 10;
            scene.add( cylinder2);
        
            const lamp1 = new THREE.Mesh( cylinderGeometry3, cylinderMaterial );
            lamp1.position.x = 1915;
            lamp1.position.z = 600 + (100) * i;
            lamp1.position.y = 75;
            scene.add( lamp1);

            const lamp4 = new THREE.Mesh( cylinderGeometry3, cylinderMaterial );
            lamp4.position.x = 1915;
            lamp4.position.z = 600 + (100) * i;
            lamp4.position.y = 65;
            scene.add( lamp4);

            const projectBoard1 = new THREE.Mesh(new THREE.BoxGeometry(5, 30, 50), projectBoardMaterial);
            projectBoard1.rotation.y = Math.PI / 2;
            projectBoard1.position.x = 1890;
            projectBoard1.position.z = 600 + (100 * i);
            projectBoard1.position.y = 70;
            scene.add( projectBoard1);
        }
    }
}

function showStreetLight(scene) {
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

    for (let i = 1; i < 18; i++) {
        const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder.position.x = 1510;
        cylinder.position.z = 500 + (100) * i;
        cylinder.position.y = 10;
        scene.add( cylinder);
        const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
        cylinder2.position.x = 2090;
        cylinder2.position.z = 500 + (100) * i;
        cylinder2.position.y = 10;
        scene.add( cylinder2);

        const lamp = new THREE.Mesh( cylinderGeometry1, cylinderMaterial );
        lamp.position.x = 1520;
        lamp.position.z = 500 + (100) * i;
        lamp.position.y = 95;
        scene.add( lamp);
        const lamp1 = new THREE.Mesh( cylinderGeometry3, cylinderMaterial );
        lamp1.position.x = 2080;
        lamp1.position.z = 500 + (100) * i;
        lamp1.position.y = 95;
        scene.add( lamp1);

        const lampLight = new THREE.Mesh( cylinderGeometry2, cylinderMaterial );
        lampLight.position.x = 1535;
        lampLight.position.z = 500 + (100) * i;
        lampLight.position.y = 105;
        scene.add( lampLight);
        const lampLight1 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial );
        lampLight1.position.x = 2065;
        lampLight1.position.z = 500 + (100) * i;
        lampLight1.position.y = 105;
        scene.add( lampLight1);
    }
}


function showProjectDirection(scene) {
    let skillBoardImg = [
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
        new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('skills[i].image'), side: THREE.DoubleSide}),
    ]
    var skillBoardMaterial = new THREE.MeshFaceMaterial(skillBoardImg);
    const skillBoard = new THREE.Mesh(new THREE.BoxGeometry(10, 30, 50), skillBoardMaterial);
    skillBoard.rotation.y = Math.PI / 2;
    skillBoard.rotation.x = Math.PI / 4;
    skillBoard.position.x = 1800;
    skillBoard.position.z = 600;
    skillBoard.position.y = 20;
    scene.add( skillBoard);
    const skillBoard1 = new THREE.Mesh(new THREE.BoxGeometry(10, 30, 50), skillBoardMaterial);
    skillBoard1.rotation.y = Math.PI / 2;
    skillBoard1.rotation.x = Math.PI * 3 / 4;
    skillBoard1.position.x = 1800;
    skillBoard1.position.z = 625;
    skillBoard1.position.y = 20;
    scene.add( skillBoard1);
}