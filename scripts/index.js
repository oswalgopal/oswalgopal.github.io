var myTerminal = new Terminal(10);
terminal.appendChild(myTerminal.html);
myTerminal.setTextSize('20px');
myTerminal.setTextColor('#00FF00');
myTerminal.blinkingCursor(false);
myTerminal.setHeight(window.innerHeight);
const date = new Date();
myTerminal.print("Welcome to the world of the terminal");
myTerminal.print('Your session started at ' + date.toLocaleDateString() + ' ' + date.toLocaleTimeString());
myTerminal.print('Enter help to list the available comands');
myTerminal.input('', command => {
        handleInput(command)
});
const handleInput  = command => {
    if (command.length) {
        if (command === 'help' || command === 'ls') {
            handleHelp();
        } else if (command === 'about'){
            showAbout();
        } else if (command === 'work'){
            showWork();
        } else if (command === 'projects'){
            showProject();
        } else if (command === 'education'){
            showEducation();
        } else if (command === 'achievements'){
            showAchievements();
        } else if (command === 'skills'){
            showSkills();
        } else if (command === 'contact'){
            showContact();
        } else if (command === 'close') {
            // window.close();
        } else if (command === 'clear') {
            myTerminal.clear();
        } else {
            handleError(command);
        }
    }
    if (command !== 'exit') {
        myTerminal.input('', command2 => {
            handleInput(command2);
        });
    }
}
const showAbout = () => {
    myTerminal.print('I am Gopal Oswal');
    myTerminal.print('Full Stack | MEAN STack | MERN STACK  web developer.');
    myTerminal.print("According to me, The only source of knowledge is experience ");
    myTerminal.print("I am a Full Stack Developer, working with Angular, Ionic, React, React Native, Flutter, Posgresql, Nodejs etc.");
    myTerminal.print("I also know version control system like Git and also experienced in both Github and Gitlab.");
    myTerminal.print("I love to meet people and interact with them to explore my knowledge.");
    myTerminal.print("I am specialized in developing web and mobile applications for your business and personal requirements.");
}

const showSkills = () => {
    myTerminal.print('I am self learner coder.');
    myTerminal.print('below is my skillset :');
    const skills = [
        {name: "React"},
        {name: "React Native"},
        {name: 'Angular'},
        {name: 'Ionic'},
        {name: "Flutter"},
        {name: "Nodejs"},
        {name: 'Mongodb'},
        {name: "FLask"},
        {name: "Django"},
        {name: "posgresql"},
        {name: "Mysql"},
        {name: "Firebase"},
        {name: "AWS "},
        {name: 'Git + Github'}
    ]
    skills.forEach((element) => {
        myTerminal.print(` > ${element.name}`);
    });
}

const showContact = () => {
    myTerminal.print('Wanna contact me :)');
    myTerminal.print('> +91 7024415907');
    myTerminal.print('> gploswal@gmail.com');
    myTerminal.print('> https://github.com/oswalgopal');
    myTerminal.print('> https://linkedin.com/in/oswalgopal');
}

const handleHelp = () => {
    myTerminal.print('Hey, Thanks for using Terminal :)');
    myTerminal.print('The available command in my terminal are :');
    const commands = [
        {name: 'about' },
        {name: 'skills'},
        {name: 'work'},
        {name: 'education'},
        {name: 'achievements'},
        {name: 'skills'},
        {name: 'projects'},
        {name: 'contact'},
        {name: 'clear'},
        {name: 'help'},
    ]
    commands.forEach((element) => {
        myTerminal.print(` > ${element.name}`);
    });
}

const handleError = (command) => {
    myTerminal.print('"' + command + '" is not recognised as a valid command ');
    myTerminal.print('use help to know more about commands');
}

const showWork = () => {
    myTerminal.print('Sorry for inconvenience :(');
    myTerminal.print('We are under Development right now');
    myTerminal.print('This sections will be updated soon');
}

const showEducation = () => {
    myTerminal.print('Sorry for inconvenience :(');
    myTerminal.print('We are under Development right now');
    myTerminal.print('This sections will be updated soon');
}
const showProject = () => {
    myTerminal.print('Sorry for inconvenience :(');
    myTerminal.print('We are under Development right now');
    myTerminal.print('This sections will be updated soon');
}

const showAchievements = () => {
    myTerminal.print('Sorry for inconvenience :(');
    myTerminal.print('We are under Development right now');
    myTerminal.print('This sections will be updated soon');
}