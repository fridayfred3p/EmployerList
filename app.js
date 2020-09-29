const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const {render, renderManager} = require("./lib/htmlRenderer");

const teamMembers = [];

const idArray = [];

function appMenu(){

function createManager() {
    inquirer.prompt(
    [
        {
            type: "input",
            message: "Please give the Manager a name:",
            name: "managerName",
            validate: function(answer) {
                if (answer !== "") {
                    return true;
                };
                return "Please enter at least one character for a name";
            }
        },
        {
            type: "input",
            message: "Please give the manager an id",
            name: "managerId",
            validate: function(answer) {
                if (answer !== "") {
                    return true;
                };
                return "Please enter at least one character for a id";
            }
        },
        {
            type: "input",
            message: "Please give the manager's email address",
            name: "managerEmail",
            validate: function(answer) {
                if (answer !== "") {
                    return true;
                };
                return "Please enter the email address";
            }
        },
        {
            type: "input",
            message: "Please input manager's office number",
            name: "managerOfficeNumber",
            validate: function(answer) {
                if (answer !== "") {
                    return true;
                };
                return "Please enter the manager's office number";
            }
        }
    ]
).then((answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    
    teamMembers.push.manager;

    createTeam();
    }))
};

function createTeam () {
    inquirer.prompt (
        [
            {
                type: "list",
                name: "memberChoice",
                message: "Which team member would you like to add",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add more team members"
                ]
            }

    ]).then(userChoice => {
        switch(userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildteam();
        };
    });

};   

function addEngineer() {
    inquirer.prompt(
        [
            {
                
                    type: "input",
                    message: "Please give the Engineer's Name",
                    name: "engineerName",
                    validate: function(answer) {
                        if (answer !== "") {
                            return true;
                        };
                        return "Please enter the engineer's name";
                    }
        
                },
                {
                    type: "input",
                    message: "Please give the Engineer's Id",
                    name: "engineerId",
                    validate: function(answer) {
                        if (answer !== "") {
                            return true;
                        };
                        return "Please enter the engineer's id";
                    }
                },
                {
                    type: "input",
                    message: "Please give the Engineer's Github username",
                    name: "github",
                    validate: function(answer) {
                        if (answer !== "") {
                            return true;
                        };
                        return "Please enter the engineer's github username";
                    }
        
                },
                {
                    type: "input",
                    message: "Please give the Engineer's email",
                    name: "engineerEmail",
                    validate: function(answer) {
                        if (answer !== "") {
                            return true;
                        };
                        return "Please enter the engineer's email address";
                    }
                }
        ]).then((answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
        
            teamMembers.push.engineer;

            createTeam();
        }))
}
    
function addIntern () {
    inquirer.prompt(
        [
            {
                type: "input",
                message: "Please give the Intern a name",
                name: "internName",
                validate: function(answer) {
                    if (answer !== "") {
                        return true;
                    };
                    return "Please enter the engineer's email address";
                }
            },
            {
                type: "input",
                message: "Please give the Intern an Id",
                name: "internId",
                validate: function(answer) {
                    if (answer !== "") {
                        return true;
                    };
                    return "Please enter the intern's Id";
                }
            },
            {
                type: "input",
                message: "Please give the Intern an email address",
                name: "internEmail",
                validate: function(answer) {
                    if (answer !== "") {
                        return true;
                    };
                    return "Please enter the Intern's email address";
                }
            },
            {
                type: "input",
                message: "Which school did the Intern graduate from",
                name: "internSchool",
                validate: function(answer) {
                    if (answer !== "") {
                        return true;
                    };
                    return "Please enter the Intern's school";
                }
            }
        ]).then((answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        
            teamMembers.push.intern; 

            createTeam();
        }))


}

createManager();

};

appMenu();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
