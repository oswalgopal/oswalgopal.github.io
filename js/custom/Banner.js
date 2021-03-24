function makeBanner(scene) {
    const cylinderGeometry = new THREE.CylinderGeometry( 2, 5, 100, 32 );
    const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
    cylinder.position.x = 400;
    cylinder.position.z = 100;
    // cylinder.position.x = 400;
    scene.add( cylinder);
    const cylinder2 = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
    cylinder2.position.x = 400;
    cylinder2.position.z = 140;
    // cylinder2.position.x = 40;
    scene.add( cylinder2);
    const BannerBoardMaterial = new THREE.MeshBasicMaterial( { color: 0xbabbbf } );
    const BannerBoardGeometry = new THREE.Mesh( new THREE.BoxGeometry( 50, 50, 10 ), BannerBoardMaterial );
    BannerBoardGeometry.rotation.y = Math.PI / 2;
    BannerBoardGeometry.position.x = 400;
    BannerBoardGeometry.position.y = 50;
    BannerBoardGeometry.position.z = 120;
    // cubes1.castShadow = true;
    // cubes1.receiveShadow = true;
    scene.add( BannerBoardGeometry ); 
}