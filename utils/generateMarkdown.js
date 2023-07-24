
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // Implement the logic to return the appropriate badge based on the license choice
    // For example, for MIT license, you can return: ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
    // If no license is selected, return an empty string
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    // Implement the logic to return the appropriate license link based on the license choice
    // For example, for MIT license, you can return: [MIT License](https://opensource.org/licenses/MIT)
    // If no license is selected, return an empty string
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    // Implement the logic to return the appropriate license section based on the license choice
    // For example, for MIT license, you can return:
    // "## License\n\nThis project is licensed under the MIT License. See the [MIT License](https://opensource.org/licenses/MIT) for details."
    // If no license is selected, return an empty string
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## License
  
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  
  ## Installation
  
  ## Usage
  
  ## Contributing
  
  ## Tests
  
  ## Questions
  
  For any questions or inquiries, feel free to contact me via GitHub: [@${data.github}](https://github.com/${data.github})
  
  You can also reach out to me via email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  