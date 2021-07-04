const Employee = require("../lib/Employee.js");

const isObject = (o) => { typeof o === 'object' && o !== null }

describe("Employee", () => {

    it("The questions associated with an employee should be undefined when first initialised", () => {
        const E = new Employee();
        expect(E.getQuestions()).toEqual(undefined);
    });

    it("The text of the questions should be updated with setQuestions", () => {
        const E = new Employee();
        let name = 'Employee';
        E.setQuestions(name);
        let q = E.getQuestions();

        // expect an array
        expect(Array.isArray(q)).toEqual(true);
        // of objects
        expect(typeof q[0]).toEqual('object');
        // where the text of the message fields have been updated with the 'name' 
        expect(q[0].message.includes(name)).toEqual(true);

        // And now check that update works' 
        name = 'Updated';
        E.setQuestions(name)
        q = E.getQuestions();
        console.log(q)
        // message contains the updated name
        expect(q[0].message.includes(name)).toEqual(true);

    });

});
