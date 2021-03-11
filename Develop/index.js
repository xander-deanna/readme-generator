// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const writeReadMe = (fs.writeFileSync)

// inquirer script to ask questions
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
      message: `First, tell me a little about yourself! (Hit enter to start please!) \n  ------- \n`
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
      name: 'requirements',
      message: 'Are there any requirements to run or use your project?',
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
        "Creative Commons",
        "GNU",
        "IBM",
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
function licenseIcon(license) {
  // switch statement that renders licence badges
  switch(license) {
    case "Apache": 
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case "Creative Commons":
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
      break;
    case "GNU":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case "IBM":
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    case "ISC":
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
      break;
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case "Mozilla":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case "Open":
      return `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`
      break;
    case "None":
      return ``
    default:
      return ``
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}** - ${licenseIcon(data.license)}
    
${data.description}
<br>
<hr>
<br>
    
## Table of Contents
* [Requirements](#Requirements)
* [Usage](#usage)
* [Contact](#Contact)
* [License](#license)
<br>
<br>
<hr>
<br>
                
## Requirements
${data.requirements}
<br>
<br>
            
## Usage
${data.usage}
<br>
<br>
    
## Contact
Please feel free to contact me with any questions you might have, using the following information:
    
Email: [${data.email}](mailto:${data.email})
<br>
Github: [https://github.com/${data.github}](https://github.com/${data.github})
<br>
<br>

## License
This application was created by ${data.name} and is covered under the ${data.license} license.
<br>
<br>
`;
}

// function to write the README file
const init = () => {
  inquirerQuestions() 
  .then((data) => {
    console.log(`\nAWESOME! Your README is now finished! \nJust navigate to the "finished" folder and take a peep at the file called yourREADME.md \n\n:)\n`)
    writeReadMe('./finished/yourREADME.md', generateMarkdown(data))
  })
  .catch((err) => console.error(err));
}

// function call to initialize app
init();