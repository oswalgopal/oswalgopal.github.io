const contactFormObj = {
    name: '',
    email: '',
    purpose: ''
};
var myTerminal = new Terminal(10);
terminal.appendChild(myTerminal.html);
myTerminal.setTextSize('20px');
myTerminal.setTextColor('#00FF00');
myTerminal.blinkingCursor(true);
myTerminal.setHeight(window.innerHeight);
const date = new Date();
myTerminal.print('==> Your session started at ' + date.toDateString() + ' ' + date.toLocaleTimeString());
myTerminal.print("==> Welcome to the terminal of Gopal Oswal! :)");
myTerminal.print("==> This terminal will give all info about me.");
myTerminal.print("==> Hope You like it :)");
myTerminal.print('--------------------------------------------------------')
myTerminal.print('Enter `help` to list the available commands');
myTerminal.input('', command => {
        handleInput(command)
});
const handleInput  = command => {
    if (command.length) {
        command = command.toLowerCase();
        if (command === 'help' || command === 'ls'|| command === 'man') {
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
        } else if (command === 'exit') {
            myTerminal.print('> Thank You for visiting my website thanks:)')
        } else if (command === 'clear') {
            myTerminal.clear();
        } else {
            handleError(command);
        }
    } else {
        myTerminal.beep();
    }
    if (command !== 'exit' && command !== 'contact') {
        myTerminal.input('', command2 => {
            handleInput(command2);
        });
    }
}
const showAbout = () => {
    myTerminal.print('==> I am Gopal Oswal');
    myTerminal.print('==> Full Stack | MEAN Stack | MERN STACK  web developer.');
    myTerminal.print("==> According to me, The only source of knowledge is experience ");
    myTerminal.print("==> I am a Full Stack Developer, working with Angular, Ionic, React, React Native, Flutter, Posgresql, Nodejs etc.");
    myTerminal.print("==> I also know version control system like Git and also experienced in both Github and Gitlab.");
    myTerminal.print("==> I love to meet people and interact with them to explore my knowledge.");
    myTerminal.print("==> I am specialized in developing web and mobile applications for your business and personal requirements.");
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
    myTerminal.input('Want to the Contact form [y/n]', confirm => {
        handleContactForm(confirm);
    })
}


const handleContactForm = confirm => {
    if (confirm.toLowerCase() === 'y') {
        myTerminal.input('Enter your name ', name => {
            contactFormObj.name = name;
            myTerminal.input('Email Id', email => {
                contactFormObj.email = email;
                myTerminal.input('Purpose of contact', purpose => {
                    contactFormObj.purpose = purpose;
                    myTerminal.print('----------------------------------------------------------');
                    myTerminal.print('Thanks for filling the form you will get in contact soon:)');
                    myTerminal.input('', command2 => {
                        handleInput(command2);
                    });
                });
            });
        });
    } else if (confirm.toLowerCase() === 'n') {
        myTerminal.input('', command2 => {
            handleInput(command2);
        });
    } else {
        myTerminal.input('Invalid selection Please select a valid option', confirm => {
            handleContactForm(confirm)
        });
    }
}

const handleHelp = () => {
    myTerminal.print('==> Hey, Thanks for using Terminal :)');
    myTerminal.print('==> The available command in my terminal are :');
    const commands = [
        {name: 'about' },
        {name: 'skills'},
        {name: 'work'},
        {name: 'education'},
        {name: 'achievements'},
        {name: 'projects'},
        {name: 'contact'},
        {name: 'clear'},
        {name: 'help'},
        {name: 'exit'},
    ]
    commands.forEach((element) => {
        myTerminal.print(` > ${element.name}`);
    });
}

const handleError = (command) => {
    myTerminal.print('`' + command + '` is not recognised as a valid command ');
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
