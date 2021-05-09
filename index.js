const inquirer = require('inquirer');
const { Employee } = require('./lib/Employee.js')



// const fs = require('fs');

// const questions = require('./questions.js');
// const makeReadme = require('./template.js');
// const  logSuccess =  console.log;




// business logic is one manager, followed by anyn number of interns and engineers;




inquirer
    .prompt(new Employee().getQuestions())
    .then((answers) => {
        console.log(answers);
    });
