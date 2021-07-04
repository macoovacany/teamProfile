const Employee = require('./Employee.js');
const {coffeeGlyph} = require('./assets/glyphs')

class Manager extends Employee {

    constructor({name, id, email,  role='Manager', officeNo}) {
        super(name, id, email, role);
        this.officeNo = officeNo;
        this.glyph = coffeeGlyph;
        this.role = role;
    }

    static toString = () => {return 'Manager'}


    static questions = (role = 'Manager') => {  // needs tobe hard coded for the prototype object
        return [
            ...super.questions(role),
            {
                type: 'input',
                name: 'officeNo',
                message: 'What is the Manager\'s office number?',
            },
        ];
    }

    getOfficeNumber() { return this.officeNo; }
}


module.exports = Manager;