const { isValidEmail } = require('./Utilities.js')


class Employee {

    constructor(name = '', id = '', email = 'default@default.org', role = 'Employee') {
        this.name = name;
        this.id = id;
        this.glyph = '';
        this.role = role;

        if (!isValidEmail(email)) { throw 'Email is not Valid' };
        this.email = email;
    };

    // prototype method doesn't have access to the contructor variables
    static questions = (role = 'Employee') => {
        return [
            {
                type: 'input',
                name: 'name',
                message: `${role}\'s name?`,
            },
            {
                type: 'input',
                name: 'id',
                message: `${role}\'s ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `${role}\'s email?`,
                // validate: Employee.prototype.isValidEmail,
            }
        ];
    };


    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }


    getRole() {
        return this.role;
    }
};


module.exports = Employee;