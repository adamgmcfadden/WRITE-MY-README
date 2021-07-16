// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title}

  ## Project Description
  ![License](https://img/shields.io/badge/License-${data.license}-blue.svg "License Badge)

  - ${data.description}

  ## Table of Contents

  * [Installation Instructions](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Testing Instructions](#testing)
  * [License](#license)

  ## Installation Instructions
  
  - ${data.installation}

  ## Usage

  - ${data.usage}

  ## Credits

  - ${data.credits}

  ## License

  - For more information on the License, click on the link below. 

  [License](https://opensource.org/license/${data.license})

  ## Contributing

  - No opportunities to contribute at this time

  ## Tests

  - ${data.testing}

  ## Questions

  - Github Username [${data.username}](https://github.com/${data.username})
  - Email address: ${data.email}

`;
};

module.exports = generateMarkdown;
