// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "None") {
    return "";
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg "License Badge")`;
  }
};

// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === "None") {
    return "";
  } else {
    return ` [License: ${license}](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
  }
};

// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === "None") {
    return "";
  } else {
    return ` ## License

  - For more information on the License, click on the link below. `;
  }
};

//Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title}

  ## Project Description
  ${renderLicenseBadge(data.license)}

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

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing

  - No opportunities to contribute at this time

  ## Tests

  - ${data.testing}

  ## Questions

  - Github Username: [${data.username}](https://github.com/${data.username})
  - Email address: ${data.email}

`;
};

//exports generateMarkdown function
module.exports = generateMarkdown;
