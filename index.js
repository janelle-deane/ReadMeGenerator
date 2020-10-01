// npm init
// install dependencies 

// Required dependencies 
const inquirer=require("inquirer")
const fs =require("fs");
const generateMarkdown= require("./generateMarkdown");
// const axios = require("axios");
// array of questions for user
const questions = [{
    type: "input",
    message: "What is the Title?",
    name: "title"
  },
  {
    type: "checkbox",
    message: "What is included in your Table of Contents?",
    name: "contents",
    choices: ["Description","Installation", "Usage", "License", "Contributors", "Tests","Questions"]
  },
  {
    type: "input",
    message: "Description",
    name: "description",
  },
 
  {
    type: "input",
    message: "Installation Instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage?",
    name: "usage",
  },
  {
    type: "list",
    message: "What is the License",
    name: "license",
    choices: ["MIT", ]
  },
  {
    type: "input",
    message: "Who are the contributors?",
    name: "contribution",
  },
  {
    type: "input",
    message: "Tests",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];



// use inquirer to prompt my questions array 

inquirer
.prompt(questions)
    
  
    // write file using template generated from readme function 
.then(function (response) {
    console.log(response);
    var userInput=generateMarkdown(response);
 
    // use user inputs from inquirer pass into readme function
    // writing ReadME in a markdown file as a template
    fs.writeFile(`README.md`, userInput, function(err){
        if(err){
           throw console.log(err)
        }
        console.log("Success")
    })

})
// write a function that will run axios to connect github profile