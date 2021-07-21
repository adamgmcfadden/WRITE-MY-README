// Include packages required for this app - fs, inquirer, generateMarkdown (function from ./utils/generateMarkdown, writeFile and copyFile promises)
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { writeFile, copyFile } = require("./utils/writeNCopy");

//enter all inquirer prompts to collect user inputs
const promptUser = () => {
  return inquirer.prompt([
    {
      //Project title
      type: "input",
      name: "title",
      message: "What is the name title of your project (Required)?",
      //use validate to prevent skipping question
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
      //use validate to prevent skipping question
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
      //use validate to prevent skipping question
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
      //use validate to prevent skipping question
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
      //use validate to prevent skipping question
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
      choices: ["Apache", "MIT", "ISC", "GPL-3.0", "None"],
    },
    {
      //testing instructions
      type: "input",
      name: "testing",
      message: "Please enter testing instructions (Required)",
      //use validate to prevent skipping question
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
      //ask user for github username
      type: "input",
      name: "username",
      message: "Please enter your github username (Required)",
      //use validate to prevent skipping question
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
      //ask user for email address
      type: "input",
      name: "email",
      message: "Please enter your email address (Required)",
      //use validate to prevent skipping question
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
  //after info collected then use generateMarkdown function to use user input
  .then((readmeData) => {
    return generateMarkdown(readmeData);
  })
  //write readme file from generateMarkdown func
  .then((page) => {
    return writeFile(page);
  })
  //console log successfully written (if the case) and copy readme file to dist folder
  .then((writeFileResponse) => {
    console.log(writeFileResponse.message);
    return copyFile();
  })
  //console log successfully copied (if the case)
  .then((copyFileResponse) => {
    console.log(copyFileResponse.message);
  })
  //console log errors for copy and write files if they occur
  .catch((err) => {
    console.log(err);
  });
