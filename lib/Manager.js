const Employee = require('./Employee.js');
const { coffeeGlyph } = require('./assets/glyphs')

class Manager extends Employee {

    constructor(params = { name: '', id: '', email: 'default@default.com', role: 'Manager', officeNo: '' }) {

        super(params.name, params.id, params.email, params.role);

        this.officeNo = params.officeNo;
        this.glyph = coffeeGlyph;
    }

    static toString = () => { return 'Manager' }


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