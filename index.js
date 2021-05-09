const inquirer = require('inquirer');
const { Manager } = require('./lib/Employee.js')



// const fs = require('fs');

// const questions = require('./questions.js');
// const makeReadme = require('./template.js');
// const  logSuccess =  console.log;




// business logic is one manager, followed by anyn number of interns and engineers;
team = [];

// get the manager first
questions = new Manager().getQuestions();

console.log(questions);


inquirer
    .prompt(questions)
    .then((answers) => {

        team = [new Manager(answers.name, answers.id, answers.email, answers.officeNo)]
    });

console.log(team);