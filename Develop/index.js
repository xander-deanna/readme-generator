// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const writeReadMe = (fs.writeFileSync)

// Inquirer script to ask questions
const inquirerQuestions = () => {
  return inquirer.prompt([
    // Intro
    {
      type: "input",
      name: "empty1",
      message: `Hi, and welcome to my README generator! Just hit enter to continue, and follow the prompts.`
    },
    {
      type: "input",
      name: "empty2",
      message: `First, tell me a little about yourself! (Hit enter please!) \n  ------- \n`
    },
    // Personal details
    {
      type: "input",
      name: "name",
      message: `What's your name? (First and Last, please!)`
    },
    {
      type: "input",
      name: "github",
      message: `Next, please enter your GitHub username.`
    },
    {
      type: "input",
      name: "email",
      message: `Nice! How about your email? `
    },
    // Project Intro
    {
      type: 'input',
      name: 'empty3',
      message: `\n  ------- \n  Cool beans! :D Thanks for all that info. \n  Now I'd like to learn a little more about your project. (Hit enter please!)\n  -------\n`
    },
    // Project details
    {
      type: 'input',
      name: 'title',
      message: `What is your project title?`
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give a brief description of your project.',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Are there any steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How about usage information?',
    },
    {
      type: "list",
      message: "Last but certainly not least, please select a usage license.",
      name: "license",
      choices: 
        [
        "Apache",
        "IBM",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open",
        "None"
        ],
    }
  ])
}

//license function
function renderLicenseBadge(license) {
  //return  `[![License:${license}](https://img.shields.io/badge/license-${renderLicenseSection(license)})](${renderLicenseLink(license)})<br>`

  return  `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)<br>`
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}
    ${renderLicenseBadge(data.license)}
    <br>
    <br>
    <hr>
    <br>
    
    ## Description
    ${data.description}
    <br>
    <br>
    <hr>
    <br>
    
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contact](#Contact)
    <br>
    <br>
    <hr>
    <br>
                
    ## Installation
    ${data.install}
    <br>
    <br>
            
    ## Usage
    ${data.usage}
    <br>
    <br>
    
    ## License
    This application was created by ${data.name} and is covered under the ${data.license} license.
    <br>
    <br>
    
    ## Contact
    Please feel free to contact me with any questions you might have, using the following information:
    
    Email: [${data.email}](mailto:${data.email})
    <br>
    Github: [${data.username}](https://github.com/${data.username})
    <br>
    
    Any and all feedback is welcome. Enjoy! :D
    `;
}

// Function to write the README file
const init = () => {
  inquirerQuestions() 
  .then((data) => {
    console.log(`\nAWESOME! Your README is now finished! \nJust navigate to the "finished" folder and take a peep at the file called yourREADME.md \n\n:)\n`)
    writeReadMe('./finished/yourREADME.md', generateMarkdown(data))
  })
 // .then (() => writeReadMe('./Finished/yourREADME.md', generateMarkdown()))
  .catch((err) => console.error(err));
}

// Function call to initialize app
init();