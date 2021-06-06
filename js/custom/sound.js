// const bg = new Audio('../../sound/Windy desert.mp3');
function playSound(camera, controls) {
    // create an AudioListener and add it to the camera
    // const listener = new THREE.AudioListener();
    // camera.add( listener );
    //
    // // create a global audio source
    // const sound = new THREE.Audio( listener );
    //
    // // load a sound and set it as the Audio object's buffer
    // const audioLoader = new THREE.AudioLoader();
    // audioLoader.load( '../../sound/Windy desert.mp3', function( buffer ) {
    //     sound.setBuffer( buffer );
    //     sound.setLoop( true );
    //     sound.setVolume( 0.3 );
    //     sound.play();
    // });
    //
    // playBird(camera, controls);
    // playDessert(camera, controls);
    //
    // controls.addEventListener( 'unlock', function () {
    //     // blocker.style.display = 'block';
    //     // instructions.style.display = '';
    //     sound.stop();
    // });
}

function playBird(camera, controls) {
    // setInterval(() => {
        // create an AudioListener and add it to the camera
    const listener = new THREE.AudioListener();
    camera.add( listener );

    // create a global audio source
    const sound = new THREE.Audio( listener );

    // load a sound and set it as the Audio object's buffer
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load( '../../sound/Bird Ambience.mp3', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop( true );
        sound.setVolume( 0.3 );
        sound.play();
    });
    controls.addEventListener( 'unlock', function () {
        // blocker.style.display = 'block';
        // instructions.style.display = '';
        sound.stop();
    });
    // }, 10000);
}

function playDessert(camera, controls) {
    // setInterval(() => {
        // create an AudioListener and add it to the camera
    const listener = new THREE.AudioListener();
    camera.add( listener );

    // create a global audio source
    const sound = new THREE.Audio( listener );

    // load a sound and set it as the Audio object's buffer
    const audioLoader = new THREE.AudioLoader();
    // audioLoader.load( '../../sound/Forest 2.mp3', function( buffer ) {
    //     sound.setBuffer( buffer );
    //     sound.setLoop( true );
    //     sound.setVolume( 0.2 );
    //     sound.play();
    // });

    // audioLoader.load( '../../sound/Apoxode_-_26.mp3', function( buffer ) {
    //     sound.setBuffer( buffer );
    //     sound.setLoop( true );
    //     sound.setVolume( 1 );
    //     sound.play();
    // });
    audioLoader.load( '../../sound/Twin Musicom - Midnight in the Graveyard.mp3', function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop( true );
        sound.setVolume( 1 );
        sound.play();
    });

    controls.addEventListener( 'unlock', function () {
        // blocker.style.display = 'block';
        // instructions.style.display = '';
        sound.stop();
    });
    // }, 10000);
}
