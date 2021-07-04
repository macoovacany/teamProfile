const Team = require('./lib/Team');
const basicTemplate = require('./templates/basicTemplate');

const  { writeFile } = require('fs');


const main = async () => {
    try {
        const team = new Team('The A Team');
        // all the calls to the methods in the team class
        // go through inquirer; so we have to await the results
        //  otherwise we get overlapping queries
        await team.addMember('Manager');

        while (team.open) {
            await team.addMember(['Engineer', 'Intern'])
            await team.queryContinue();
        }

        const theATeamReport = new basicTemplate(team);

        const data = new Uint8Array(Buffer.from(theATeamReport.reportHTML));
        
        writeFile(`./dist/${team.teamName}.html`, data, (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        });

    } catch (err) {
        console.log(err);
    }
}


main();
