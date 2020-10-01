// function to generate markdown for README
  // use user inputs from inquirer pass into readme function

module.exports =function generateMarkdown(response) {
  let test =""
  response.contents.forEach(element => {
    // [link to itself on the page
    test += `\n* [${element}](#${element})\n`})
   
  return `# ${response.title}
   ## Table of Contents: 
   ${test}
   ## Description: 
   ${response.description}
   ## Installation: 

   Installation Instructions
   
   ${response.installation}
   ## Usage: 
   ${response.usage}
   ## License
   ${response.license}
   ## Contributors: 
   @${response.contribution}
   ## Tests: 
   ${response.tests}
   ## Questions: 
   Feel free to reach out to me either on my github or email. 
   
   Github:
   https://github.com/${response.github}/
   
   Email:
   ${response.email}`  







;}

// https://shields.io/ add badges?
// need to link my git hub via my userName...use axios
// how to link video and pictures?

// images: ![GitHub Logo](/images/logo.png)Format: ![Alt Text](url)