// Defines the various roles that are available in the team,
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

// The Team object is responsible for assembling the team
const inquirer = require('inquirer');

// 
employeeTypes = [Manager, Engineer, Intern]

// create a look up table to the questions for the inquirer module 
inqDispatchTable = {};
employeeTypes.forEach(element => {
    inqDispatchTable[element.toString()] =
    {
        questions: element.questions(),
        typeConstructor: element // called as a constructor
    }
});

class Team {

    constructor() {
        this.members = [];
        this.open = true;
        this.teamName = '';
    }


    queryTeamName = async () => {
        try {
            const ans = await inquirer.prompt(
                [{
                    type: 'input',
                    name: 'teamName',
                    message: 'What is the team name?',
                }]);

            this.teamName = ans.teamName;

        } catch (err) {
            console.log(err)
        }
    }


    queryContinue = async () => {
        const ans = await inquirer.prompt(
            [{
                type: 'confirm',
                name: 'addAnotherEmployee',
                message: '... more?',
                default: true
            }]);

        this.open = ans.addAnotherEmployee;
    };




    addMember = async (employeeType) => {
        try {
            // if the employeeType is an array, then it means that 
            // the employee types can be optional
            // we need to find which type of employee is desired.
            if (Array.isArray(employeeType)) {
                const ans = await inquirer.prompt(
                    {
                        type: 'list',
                        name: 'optionalEmployeeType',
                        message: 'What type of employee?',
                        choices: employeeType,
                    });

                employeeType = ans.optionalEmployeeType;
            }

            // input will either be array (which is now a string), 
            // or has been input as a string
            if (typeof employeeType === 'string') {

                const ans = await inquirer.prompt(inqDispatchTable[employeeType].questions);
                
                // inqDispatchTable[typeConstructor] is fancy way of getting the constructor
                this.members.push(new inqDispatchTable[employeeType].typeConstructor(ans))

            } else {
                throw `Can not add an employee of type ${employeeType}`
            }

        } catch (err) {
            console.log(err)
        }
    }



}

module.exports = Team;

