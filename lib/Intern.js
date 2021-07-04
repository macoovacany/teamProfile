const Employee = require('./Employee.js');
const {graduateGlyph} = require('./assets/glyphs')


class Intern extends Employee {

    constructor({name, id, email, role='Intern', school}) {
        super(name, id, email, role);
        this.school = school;
        this.glyph = graduateGlyph;
    }

    static toString = () => {return 'Intern'};

    static questions = (role = 'Intern') => {
        return [
            ...super.questions(role),
            {
                type: 'input',
                name: 'school',
                message: 'What is the Intern\'s school?',
            },
            ];
    }


    getSchool() { return this.school; }

}




module.exports = Intern;