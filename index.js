// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// const questions = [
//   "What is the title of your project?",
//   "Enter a description of the project",
//   "Please enter installation instructions",
//   "Please enter usage information",
//   "Please enter contributions",
//   "Please enter testing instructions",
// ];

//enter all inquirer prompts to collect user inputs
inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the name title of your project (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("You need to enter a project title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brieft description of the project (Required)",
    validate: (descInput) => {
      if (descInput) {
        return true;
      } else {
        console.log("You need to enter a brief description of the project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installation instructions (Required)",
    validate: (installInstr) => {
      if (installInstr) {
        return true;
      } else {
        console.log("You need to enter app installation instructions!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "contributions",
    message: "Please enter contributors (Required)",
    choices: ["Adam Girard-McFadden", "Carleton University", "Others"],
    validate: (contribute) => {
      if (contribute) {
        return true;
      } else {
        console.log("You must enter at least contributor!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "testing",
    message: "Please enter testing instructions (Required)",
    validate: (test) => {
      if (test) {
        return true;
      } else {
        console.log("You must enter testing instructions!");
        return false;
      }
    },
  },
]);

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
