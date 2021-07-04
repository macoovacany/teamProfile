const Employee = require('./Employee.js');
const {glassesGlyph} = require('./assets/glyphs')

class Engineer extends Employee {

    constructor({name, id, email, role='Engineer', githubName}) {
        super(name, id, email, role);
        this.githubName = githubName;
        this.glyph = glassesGlyph;
        this.role = 'Engineer';
    }

    static toString = () => {return 'Engineer'}

    static questions = (role = 'Engineer') => {
        return [
            ...super.questions(role),
            {
                type: 'input',
                name: 'githubName',
                message: 'What is the Engineer\'s  github profile name?',
            },
        ];
    }



    getGithubName() { return this.githubName; }
}



module.exports = Engineer;