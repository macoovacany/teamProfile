const {isValidEmail} = require('./Utilities.js')


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        if isValidEmail(email){
            this.email = email;
        } else { throw 'Email is not Valid'; }
        this.role = 'Employee';
    };


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

}