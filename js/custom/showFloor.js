// adding floor 
// width — Width along the X axis. Default is 1.
// height — Height along the Y axis. Default is 1.
// widthSegments — Optional. Default is 1.
// heightSegments — Optional. Default is 1.
function showFloor (scene, vertex) {
    var floorGeometry = new THREE.PlaneGeometry(20000, 20000, 100, 100);
        floorGeometry.rotateX( - Math.PI / 2 );

        // vertex displacement
        let position = floorGeometry.attributes.position;
        for ( let i = 0, l = position.count; i < l; i ++ ) {

            vertex.fromBufferAttribute( position, i );

            vertex.x += Math.random() * 20 - 10;
            vertex.y += Math.random() * 2;
            vertex.z += Math.random() * 20 - 10;

            position.setXYZ( i, vertex.x, vertex.y, vertex.z );
        }
        floorGeometry = floorGeometry.toNonIndexed(); // ensure each face has unique vertices

        position = floorGeometry.attributes.position;
        const colorsFloor = [];

        for ( let i = 0, l = position.count; i < l; i ++ ) {
            const obj1 = {
                c1: 30/100,
                c2: 10/100,
                c3: 35/100
            };
            const obj2 = {
                c1: 30/100,
                c2: 10/100,
                c3: 29/ 100
            };
            const obj3 = {
                c1: 30/100,
                c2: 10/100,
                c3: 23/100
            };
            // color.setHSL( Math.random() * 120 + 0.5, 100, Math.random() * 0.25 + 0.75 );
            if (i % 3 == 0) {
                color.setHSL(obj1.c1, obj1.c2, obj1.c3 );
                // console.log(0);
            } else if (i % 3 == 1) {
                color.setHSL(obj2.c1, obj2.c2, obj2.c3 );
                // console.log(1);
            } else if (i % 3 == 2) {
                color.setHSL(obj3.c1, obj3.c2, obj3.c3 );
                // console.log(2);
            } else {
                color.setHSL(obj3.c1, obj3.c2, obj3.c3 );
                // console.log(4);
            }
            // color.setHSL(c1, c2, c3 );
            colorsFloor.push( color.r, color.g, color.b );

        }

        floorGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colorsFloor, 3 ) );

        const floorMaterial = new THREE.MeshBasicMaterial( {vertexColors: true} );
        // var floorMaterial = new THREE.ShadowMaterial();
        // floorMaterial.opacity = 0.2;
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.receiveShadow = true;
        scene.add(floor);
}