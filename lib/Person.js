class Person {
    constructor(name = '') {
        this.name = name;
    }

    // inquirer question format for a generic person
    questions(role = "employee") {
        return [
            {
                type: 'input',
                name: 'name',
                message: `What is this ${role}\'s name?`,
            }
        ];
    }
}

module.exports = Person;
