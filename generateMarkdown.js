// function to generate markdown for README
  // use user inputs from inquirer pass into readme function

module.exports =function generateMarkdown(response) {
  response.contents.forEach(element => {
    // [link to itself on the page
    return test = `* [${element}](#${element})`})
   
  return `# ${response.title}
   ## Table of Contents: 
   ${test}

   ## Description: 
   ${response.description}
   ## Installation Instructions: 
   ${response.installation}
   ## Uses: 
   ${response.usage}
   ## License
   ${response.license}
   ## Contributors: 
   ${response.contribution}
   ## Tests: 
   ${response.tests}
   ## Questions: 
   ${response.github}
   ${response.email}`  







;}

// https://shields.io/ add badges?
// need to link my git hub via my userName...use axios
// how to link video and pictures?

// images: ![GitHub Logo](/images/logo.png)Format: ![Alt Text](url)