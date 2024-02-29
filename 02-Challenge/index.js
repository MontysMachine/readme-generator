// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {   
        type: 'input',
        name: 'title',
        message: 'What is the title of your app?\n'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your app:\n'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation instructions needed:\n'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please write the usage section for your app:\n'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter the contribution guidelines of your app:\n'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please write any tests you may have for your app:\n'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'MPL', 'IBM', 'No license because I play by my own rules']
    }
]

// TODO: Create a function to write README file
function writeToFile(answers) {
    return `# ${answers.title}

    ## Description
    ${answers.description}
    
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    
    ## Installation
    ${answers.installation}
    
    ## Usage
    ${answers.usage}
    
    ## Contributing
    ${answers.contribution}
    
    ## Tests
    ${answers.test}
    
    ## License
    This project is licensed under the ${answers.license} License.`
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>{
        fs.writeFile("README.md", writeToFile(answers), err=>{
            if (err){
                console.log(err);
            }else{
                console.log("Congrats your README has been generated feel free to say HOORAY!!");
            }
        })
    })
}

// Function call to initialize app
init();
