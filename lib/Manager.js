const Employee = require('./Employee.js');

const coffeeGlyph = `<svg style="inline; height:1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 120" x="0px" y="0px"><title>Artboard 39</title><g data-name="Layer 41"><path d="M75,39H73V35a2,2,0,0,0-2-2H25a2,2,0,0,0-2,2V52A25,25,0,0,0,34.46,73H28a7,7,0,0,0,0,14H68a7,7,0,0,0,0-14H61.54a25.13,25.13,0,0,0,8.9-10H75a12,12,0,0,0,0-24ZM68,77a3,3,0,0,1,0,6H28a3,3,0,0,1,0-6ZM48,73A21,21,0,0,1,27,52V37H69V52A21,21,0,0,1,48,73ZM75,59H72a25.25,25.25,0,0,0,1-7V43h2a8,8,0,0,1,0,16Z"/><path d="M33,41a2,2,0,0,0-2,2v9a2,2,0,0,0,4,0V43A2,2,0,0,0,33,41Z"/><path d="M36.71,28.81a2,2,0,0,0,1.41.59,2,2,0,0,0,1.42-.59,2,2,0,0,0,0-2.82,3.49,3.49,0,0,1,0-4.95,7.52,7.52,0,0,0,0-10.61,2,2,0,1,0-2.83,2.83,3.51,3.51,0,0,1,0,5A7.49,7.49,0,0,0,36.71,28.81Z"/><path d="M46.71,28.81a2,2,0,0,0,1.41.59,2,2,0,0,0,1.42-.59,2,2,0,0,0,0-2.82,3.49,3.49,0,0,1,0-4.95,7.52,7.52,0,0,0,0-10.61,2,2,0,1,0-2.83,2.83,3.51,3.51,0,0,1,0,5A7.49,7.49,0,0,0,46.71,28.81Z"/><path d="M56.71,28.81a2,2,0,0,0,1.41.59,2,2,0,0,0,1.42-.59,2,2,0,0,0,0-2.82,3.49,3.49,0,0,1,0-4.95,7.52,7.52,0,0,0,0-10.61,2,2,0,1,0-2.83,2.83,3.51,3.51,0,0,1,0,5A7.49,7.49,0,0,0,56.71,28.81Z"/></g><text x="0" y="111" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Fahrur Razi Siddiq</text><text x="0" y="116" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>`;


class Manager extends Employee {

    constructor({name, id, email, officeNo}) {
        super(name, id, email, 'Manager');
        this.officeNo = officeNo;
        this.glyph = coffeeGlyph;
        this.role = 'Manager';
    }

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