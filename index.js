// Include packages required for this app - fs, inquirer, generateMarkdown (function from ./utils/generateMarkdown)
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//enter all inquirer prompts to collect user inputs
const promptUser = () => {
  return inquirer.prompt([
    {
      //Project title
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
      //Project description
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
      //installation instructions
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
      //usage instructions
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
      //credits to...
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
      //list of common licenses
      type: "list",
      name: "license",
      message: "Please enter license name if applicable",
      choices: ["Apache", "MIT", "ISC", "GPL-v3.0", "None"],
    },
    {
      //testing instructions
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
      //github username
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
      //email address
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
  ]);
};

//call promptUser function
promptUser()
  //after info collected then write readme file with collected info
  .then((readmeData) => {
    console.log(readmeData);
    fs.writeFile("./README.md", generateMarkdown(readmeData), (err) => {
      //if error, console log error
      if (err) {
        return console.log(err);
      }

      //if successful, console log successful message
      console.log("ReadME file successfully written!");
    });
  });
