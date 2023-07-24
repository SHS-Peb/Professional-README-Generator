
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown'); // Corrected the relative path

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a brief description of the project:',
  },
  {
    type: 'input',
    name: 'tableOfContents', // Updated name to camelCase
    message: 'Enter your Table of Contents:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use:',
  },
  // Add more questions for other sections of the README as needed
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide guidelines for how others can contribute to your project:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md successfully generated!');
    }
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((userInput) => {
      const readmeContent = generateMarkdown(userInput);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
}

init();
