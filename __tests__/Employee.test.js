const Employee = require("../lib/Employee.js");

const isObject = (o) => { typeof o === 'object' && o !== null }

describe("Employee", () => {

    // default getter values
    it("A new employee should be initialised with default values", () => {
        const E = new Employee();
        expect(E.getName()).toEqual('');
        expect(E.getId()).toEqual('');
        expect(E.getEmail()).toEqual('default@default.org');
        expect(E.getRole()).toEqual('Employee');
    });

        // specialised for constructed Employee
        it("A new employee should be initialised with default values", () => {
            const E = new Employee({name:'some name', id: '12345', glyph:'', email: 'another@email.com', role: 'Contractor'});
            expect(E.getName()).toEqual('some name');
            expect(E.getId()).toEqual('12345');
            expect(E.getEmail()).toEqual('another@email.com');
            expect(E.getRole()).toEqual('Contractor');
        });
    




});

