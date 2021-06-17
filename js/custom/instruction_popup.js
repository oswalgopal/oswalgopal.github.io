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
    if (position.x > 1600 && position.z > 500) {
        showProjectText();
    }
    if (position.x > 1700 && position.x < 2100 && position.z < -150) {
        showSkillText();
    }
    // if (position.x > 800 && position.x < 1300) {
    //         interaction_text.innerText = "Press M for Gmail \n G for Github \n L for Linkedin \n P for Call";
    //         document.addEventListener("keyup", ev => {
    //             console.log(ev);
    //             if (ev.code === 'KeyL') {
    //                 window.open('https://www.linkedin.com/in/oswalgopal/');
    //             } else if (ev.code === 'KeyG') {
    //                 window.open('https://github.com/oswalgopal');
    //             } else if (ev.code === 'KeyM') {
    //                 window.open('mailto:gploswal@gmail.com');
    //             } else if (ev.code === 'KeyP') {
    //                 window.open('https://api.whatsapp.com/send?phone=+917024415907');
    //             }
    //         });
    //         setTimeout(() => {
    //             interaction_text.innerText = "";
    //         }, 5000)
    // }
    if (position.x > 2100 && position.z > 100 && position.z < 300) {
        showOtherSkillText()
    }
    if (position.x > 2200 && position.x < 3100 && position.z < -150) {
        showGardenText()
    }
    if (position.x > 1500 && position.x > 400 && position.z > 600) {
        showFieldText();
    }
}
var count = 0;
 async function showWelcomeText() {
        count++;
        if (count == 1) {
            instruction_sound_copy.play();
            game_instructions_copy.style.display = "block";
            // game_instructions_text_copy.innerText = "";
            const text = "Welcome to My World!. I am really happy to see you here.";
            typeWriterWrapper(text)
            closeText();
        }
}
var showGardenText = 0;
function showGardenText(){
    showGardenText++;
    if (showGardenText == 1) {
        instruction_sound_copy.play();
        game_instructions_copy.style.display = "block";
        // game_instructions_text_copy.innerText = "";
        const text = "A Garden is a friend where you can visit anytime. It will heal up your all stress and provide you a great level of pleasure.";
        typeWriterWrapper(text)
        closeText();
    }
}

var showOtherSkillTextCount = 0;
function showOtherSkillText() {
    showOtherSkillTextCount++;
    if (showOtherSkillTextCount == 1) {
        instruction_sound_copy.play();
        game_instructions_copy.style.display = "block";
        // game_instructions_text_copy.innerText = "";
        const text = "What people get admired and appreciated because of their soft skills.";
        typeWriterWrapper(text)
        closeText();
    }
}

var showFieldCount = 0;
function showFieldText() {
    showFieldCount++;
    if (showFieldCount == 1) {
        instruction_sound_copy.play();
        game_instructions_copy.style.display = "block";
        // game_instructions_text_copy.innerText = "";
        const text = "Field is place where you lose your mind and find your soul.";
        typeWriterWrapper(text)
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
        if (projectCount === 1) {
            instruction_sound_copy.play();
            game_instructions_copy.style.display = "block";
            const text = "It seems you are looking into my projects. press Shift key to check my resume.";
            typeWriterWrapper(text);
            closeText();
        }
        interaction_text.innerText = "Press Shift to Check my resume";
        document.addEventListener("keyup", ev => {
            console.log(ev);
            if (ev.code === 'ShiftLeft' ||  ev.code === 'ShiftRight') {
                showResume();
            }
        })
        setTimeout(() => {
            interaction_text.innerText = "";
        }, 5000)
}
var skillCount = 0;
function showSkillText() {
    skillCount++;
    if (skillCount === 1) {
        instruction_sound_copy.play();
        game_instructions_copy.style.display = "block";
        const text = "Skills are very important asset a person have. Explore out some of my skills.";
        typeWriterWrapper(text);
        closeText();
    }
    interaction_text.innerText = "Press Shift to Check my resume";
    document.addEventListener("keyup", ev => {
        console.log(ev);
        if (ev.code === 'ShiftLeft' ||  ev.code === 'ShiftRight') {
            showResume();
        }
    })
    setTimeout(() => {
        interaction_text.innerText = "";
    }, 1000)
}

function typeWriterWrapper(txt){
    var i = 0;
    var speed = 50;
    typeWriter();
    function typeWriter() {
    if (i < txt.length) {
        game_instructions_text_copy.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    }
}

function showResume() {
    window.open('https://docs.google.com/document/d/1Xvem4Hrvac1p8wQWxZZhP3R-yJq0BuGeGw5Ziki1Xjw/edit?usp=sharing');
}