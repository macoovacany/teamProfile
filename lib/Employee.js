const { isValidEmail } = require('./Utilities.js')


class Employee {
    constructor(name='', id='', email='default@default.org', role = 'Employee') {
        this.name = name;

        if (!this.isValidID(id)) { throw "not a valid ID" };
        this.id = id

        if (!isValidEmail(email)) { throw 'Email is not Valid' };
        this.email = email;

        this.role = role;
    };

    isValidID(id) { return true; }


    getName() {
        return this.Name;
    }

    getId() {
        return this.Id;
    }

    getEmail() {
        return this.Email;
    }


    getRole() {
        return this.role;
    }

    getQuestions() { return this.questions; }

    questions = [
        {
            type: 'input',
            name: 'name',
            message: 'Employee\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee\'s ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee\'s  email?',
            validate: isValidEmail
        }
    ];
}



class Manager extends Employee {
    constructor(name, id, email, officeNo) {
        super(name, id, email, 'Manager');
        this.officeNo = officeNo;
        this.questions = [ ...this.questions, 
            {
                type: 'input',
                name: 'officeNo',
                message: 'What is the manager\'s office number?',
            }];
    }

    getOfficeNumber() { return this.officeNo; }
}



class Engineer extends Employee {
    constructor(name, id, email, githubName) {
        super(name, id, email, 'Engineer');
        this.githubName = githubName;
        this.questions = [ ...this.questions, 
            {
                type: 'input',
                name: 'githubName',
                message: 'What is the engineer\'s github profile name?',
            }];
    }

    getGithubName() { return this.githubName; }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'Intern');
        this.school = school;
        this.questions = [ ...this.questions, 
            {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school?',
        }];
    }
    getSchool() { return this.school; }

}








module.exports = {
    Employee: Employee,
    Manager: Manager,
    Engineer: Engineer,
    Intern: Intern,
}