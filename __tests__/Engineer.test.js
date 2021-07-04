const Engineer = require("../lib/Engineer.js");

const isObject = (o) => { typeof o === 'object' && o !== null }

describe("Engineer", () => {

    // default getter values
    it("A new Engineer should be initialised with default values", () => {
        const E = new Engineer();
        expect(E.getName()).toEqual('');
        expect(E.getId()).toEqual('');
        expect(E.getEmail()).toEqual('default@default.com');
        expect(E.getGithubName()).toEqual('No Github Profile');
        expect(E.getRole()).toEqual('Engineer');
    });

    // specialised for constructed Engineer
    it("A new Engineer initialised with values", () => {
        const E = new Engineer({
            name: 'Dilbert',
            id: '12345',
            email: 'dilbert@email.com',
            role: 'Contractor',
            githubName: 'dilbert45'
        });

        expect(E.getName()).toEqual('Dilbert');
        expect(E.getId()).toEqual('12345');
        expect(E.getEmail()).toEqual('dilbert@email.com');
        expect(E.getGithubName()).toEqual('dilbert45');
        expect(E.getRole()).toEqual('Contractor');
    });


});

