
const { Employee,
    Manager,
    Engineer,
    Intern,
} = require('../lib/Employee.js')



// constant template strings
const htmlPreamble = `<!DOCTYPE html>
<html lang="en-US">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />

<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<link href="./app.css" rel="stylesheet">

<title> Team Profile </title>

</head>



<body>
<header> My team </header>
<main style="flex">
<div class="min-h-screen bg-gray-200 flex justify-center items-center">
`


const htmlPostamble = `</div> </main>
</body>
</html>`





class teamProfileTemplate {
    constructor(...rest) {
        this.html = html(title, ...);
    }


    // the main entry point to creating the html
    html(...rest) {
        html += htmlPreamble;

        rest.forEach((e) => {
            html += employeeHTML(e);
        })
        html += htmlPostamble
        return this.html;
    }



    employeeHTML(person) {

        // get the employee specialty keys.
        // genKeys = Object.keys(Employee);
        personKeys = Object.keys(person);
        // all the values but the name
        printKeys = personKeys.filter(k => k != 'name');


        // preamble for each person
        html = `
            <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
               <div class="flex items-center mb-4"> 
                  <img  class="w-20 rounded-full border-2 border-gray-300" src="#" />
                  <div class="leading-5 ml-6 sm">
                     <h4 class="text-xl font-semibold">${person.name}</h4>${'\n'}`;

        // the rest of the keys
        printKeys.forEach((k) => {
            html += `<h5 class="font-semibold text-blue-600">${person[key]}</h5>${'\n'}`
        });

        // the postamble
        html += `</div>
               </div>
            </div>${'\n'}`
    }
}

