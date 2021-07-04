const Manager = require("../lib/Manager.js");

const isObject = (o) => { typeof o === 'object' && o !== null }

describe("Manager", () => {

    // default getter values
    it("A new Manager should be initialised with default values", () => {
        const E = new Manager();
        expect(E.getName()).toEqual('');
        expect(E.getId()).toEqual('');
        expect(E.getEmail()).toEqual('default@default.com');
        expect(E.getOfficeNumber()).toEqual('');
        expect(E.getRole()).toEqual('Manager');
    });

    // specialised for constructed Manager
    it("A new Manager with given values", () => {

        const E = new Manager({
            name: 'Dilbert',
            id: '12345',
            email: 'dilbert@email.com',
            role: 'Temporary Supervisor',
            officeNo: 'work from home'
        });
        expect(E.getName()).toEqual('Dilbert');
        expect(E.getId()).toEqual('12345');
        expect(E.getEmail()).toEqual('dilbert@email.com');
        expect(E.getOfficeNumber()).toEqual('work from home');
        expect(E.getRole()).toEqual('Temporary Supervisor');
    });


});

