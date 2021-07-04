//  *********************************************************
// Various 'components' used in the template 

const preamble = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

  <style>
.thumbnail{ border-radius:2rem;}

  </style>
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

  //  destructure the specific employee object
  const { name, id, glyph, email, role, ...restProps } = emp;  

  // render out the specifc properties for the employee 
  renderSpecificProps = '';
  for (const property in restProps) {
    rp = `<p data-employee-property="${property}">${property}: ${restProps[property]}</p>`
    renderSpecificProps = renderSpecificProps + rp + '\n';
  }

  return `
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail rounded">
      <div class="caption">
        <h3 data-employee-property="name"><b>${name} </b></h3>
        <hr />
        <p data-employee-property="role"> ${glyph} ${role} </p>
        <p data-employee-property="id">Employee ID: ${id}</p>
        <p data-employee-property="email">Employee email: ${email}</p>
        ${renderSpecificProps}
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
    `<div class="row">` +
      content +
      `</div>`
      postamble;
  }
}

module.exports = basicTemplate;
