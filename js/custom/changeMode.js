function changeMode(scene) {
    let button = document.getElementById('ModeButton')
    if (button.innerHTML === "Night Mode") {
        scene.background = new THREE.Color( 0x000000 );
        button.innerHTML = "Day Mode";
    } else {
        scene.background = new THREE.Color( 0xbcfbf7 );
        button.innerHTML = "Night Mode";
    }
    console.log(button.innerHTML);
}