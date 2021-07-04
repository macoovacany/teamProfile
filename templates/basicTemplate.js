//  *********************************************************
// Various 'components' used in the template 

const preamble = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">

  <title>Team Details</title>
  </head>
  <body>`;


const postamble = `</body>
  </html>`


// 
const jumbotronTeamName = (teamName) => {
  return `<div class="jumbotron">
    <div class="container">
      <h1> ${teamName}</h1>
    </div>
  </div>`
}

// 
// 
const employeeCard = (emp) => {

  const { name, id, glyph, email, ...restProps } = emp;

  //  destructure the specific employee object
  const role = emp.toString();
  console.log('role: ' + JSON.stringify(role) +'\ntypeof role: ' + typeof role )

  // render out the specifc properties for the employee 
  renderSpecificProps = '';
  for (const property in restProps) {
    rp = `<p data-employee-property="${property}">${property}: ${restProps[property]}</p>`
    renderSpecificProps = renderSpecificProps + rp + '\n';
  }

  return `<div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <div class="caption">
        <h3 data-employee-property="name">${name}</h3>
        <p data-employee-property="role">  ${role} </p>
        <p data-employee-property="id">Employee ID: ${id}</p>
        <p data-employee-property="email">Employee email: ${email}</p>
        ${renderSpecificProps}
      </div>
    </div>
  </div>
</div>`
}



// *********************************************************
// template objects 

class basicTemplate {

  constructor(team) {
    this.team = team;

    let content = '';

    //  header
    content += jumbotronTeamName(team.teamName);

    //  employee cards
    team.members.forEach(emp => {
      content += employeeCard(emp)
    });
    
    this.reportHTML = preamble + 
      content +
      postamble;
  }
}

module.exports = basicTemplate;
