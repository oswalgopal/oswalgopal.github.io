var game_instructions_copy;
var game_instructions_text_copy;
var instruction_sound_copy;
var interaction_text = document.getElementById('interaction_text');
function checkPosition(game_instructions, game_instructions_text, position, instruction_sound) {
    game_instructions_copy = game_instructions;
    game_instructions_text_copy = game_instructions_text;
    instruction_sound_copy = instruction_sound;
    // game_instructions_copy.style.display = "none";
    console.log(position);
    if (position.x > 300)  {
        showWelcomeText();
    }
    if (position.x > 1800 && position.z > 500) {
        showProjectText()
    }
}
var count = 0;
function showWelcomeText() {
        count++;
        if (count == 1) {
            instruction_sound_copy.play();
            game_instructions_copy.style.display = "block";
            game_instructions_text_copy.innerText = "Welcome to My World!. I am really happy to see you here";
            closeText();
        }
}


function closeText(){
    setTimeout(() => {
        game_instructions_copy.display = "none !important";
        game_instructions_text_copy.innerText = "";
        game_instructions_copy.style.display = "none";
    }, 5000);
}

var projectCount = 0;
function showProjectText() {
    projectCount++;
        if (projectCount == 1) {
            instruction_sound_copy.play();
            game_instructions_copy.style.display = "block";
            game_instructions_text_copy.innerText = "It seems you are looking into my projects. press Shift key to check my resume";
            closeText();
        }
        interaction_text.innerText = "Press Shift to Check my resume";
        setTimeout(() => {
            interaction_text.innerText = "";
        }, 1000)
}