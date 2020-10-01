// function to generate markdown for README

module.exports =function generateMarkdown(response) {
  response.contents.forEach(element => {
   
    return test =`* ${element}`})
 
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