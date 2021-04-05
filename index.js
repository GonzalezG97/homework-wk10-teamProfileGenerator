const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const path = require("path");
const fs = require("fs");

const team = [];
const teamIds = [];
// Place to put directories
// function to start prompts


const startApp = () => {
  const managerPrompts = () => {
    inquirer
      .prompt([
        {
          type: "input",
          message: `Please enter the Team Manager's name`,
          name: "managerName",
        },
        {
          type: "input",
          message: `What is your employee ID?`,
          name: "managerID",
        },
        {
          type: "input",
          message: `What is your email?`,
          name: "managerEmail",
        },
        {
          type: "input",
          message: `What is your office number?`,
          name: "managerOffice",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerEmail,
          answers.managerOffice,
          answers.managerID
        );
        team.push(manager);
        teamIds.push(answers.managerID);
        teamChoices();
        
      });
  };


};

const teamChoices = () => {
  inquirer.prompt([
    {
      type: "list",
      message: `Do you want to add a team member?`,
      name: "chosenEmployeeType",
      choices: [Engineer, Intern, Finished],
    },
  ]).then(answers => {
    switch (answers.chosenEmployeeType) {
      case 'Engineer':
        createEngineer();
        break;
      case 'Intern':
        createIntern();
        break;
      case 'Finished':
        createTeam();
    }
  });
};



startApp();
