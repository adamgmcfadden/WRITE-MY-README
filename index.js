// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
//TODO: Create an array of questions for user input
const questions = [
  "What is the name title of your project (Required)?",
  "Provide a brieft description of the project (Required)?",
  "What are the steps required to install your project? (Required)?",
  "Provide instructions and examples for use (Required).",
  "Please enter the name(username if applicable) of all those who contributed on the project (Required).",
  "Please enter testing instructions (Required).",
  "Please enter license name if applicable.",
];

const questionTitles = [
  "title",
  "description",
  "installation",
  "usage",
  "credits",
  "testing",
  "license",
];

//enter all inquirer prompts to collect user inputs
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name title of your project (Required)?",
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
      message: "Provide a brieft description of the project (Required)?",
      validate: (descInput) => {
        if (descInput) {
          return true;
        } else {
          console.log("You need to enter a brief description of the project!?");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message:
        "What are the steps required to install your project? (Required)?",
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
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use. (Required)",
      validate: (usageInst) => {
        if (usageInst) {
          return true;
        } else {
          console.log("You need to enter app installation instructions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "credits",
      message:
        "Please enter the name(username if applicable) of all those who contributed on the project (Required)",
      validate: (credits) => {
        if (credits) {
          return true;
        } else {
          console.log("You must enter at least contributor!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "license",
      message: "Please enter license name if applicable",
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
    {
      type: "input",
      name: "username",
      message: "Please enter your github username (Required)",
      validate: (username) => {
        if (username) {
          return true;
        } else {
          console.log("You must enter your username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address (Required)",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("You must enter your email address!");
          return false;
        }
      },
    },
  ])
  .then((data) => {
    console.log(data);
    fs.writeFile("./dist/README.md", generateMarkdown(data), (err) => {
      if (err) {
        return console.log(err);
      }

      console.log("ReadME file successfully written!");
    });
  });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
