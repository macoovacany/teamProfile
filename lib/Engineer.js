const Employee = require('./Employee.js');
const {glassesGlyph} = require('./assets/glyphs')

class Engineer extends Employee {

    constructor(params = { name: '', id: '', email: 'default@default.com', role: 'Engineer', githubName:'No Github Profile'}) {


        super(params.name, params.id, params.email, params.role);

        this.githubName = params.githubName;
        this.glyph = glassesGlyph;
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