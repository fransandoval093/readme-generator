const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([

    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        validate (input) {
            if(input==="") {
                return 'Please enter a Github username';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your contact email?',
        validate (input) {
            if(input==="") {
                return 'Please enter an email';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message:'What is the title of your project?',
        validate (input) {
            if(input==="") {
                return 'Please enter a title';
            } else {
                return true;
            }
        }
    },
    // Description, Installation, Usage, Contributing, and Tests
    {
        type: 'input',
        name: 'description',
        message: 'Please provde a description of the project.',
        validate (input) {
            if(input==="") {
                return 'Please enter a description of the project';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What CLI command is required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message:'Provide an example use of project.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: "How can one contribute to this repository?"
    },
    {
        type: 'input',
        name: 'testing',
        message: "What are instructions for testing your project?"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license',
        choices: ['MIT','Apache','GNU GPLv3']
    },
  ])

  .then((data) => {

    // usrs.push(data)
    // for (const index of usrs) {
    // }
    console.log(`Logging User Entries...`);
    // console.log(`${data}`);
    const content =   
    `
    # ${data.title}
    ## Description
    ${data.description}
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Contributing
    ${data.contributing}
    ## Tests
    ${data.testing}
    ## License
    This project is licensed under the ${data.license} license.
    ## Questions
    If you have any questions, please use the contact information below:  
    https://github.com/${data.username}  
    ${data.email}
    `
    // ternary operatory example
    // (data.name=="NAME") ? console.log("You're NAME") : console.log("Ypu're not NAME");

    const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;


    fs.writeFile(filename, content, (err) =>
      err ? console.log(err) : console.log(`Successfully made the project file: ${filename} !`)
    );
    
  })
;