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
      .then(answers => {
        const newManager = new Manager(
          answers.managerName,
          answers.managerEmail,
          answers.managerOffice,
          answers.managerID
        );
        team.push(newManager);
        teamIds.push(answers.managerID);
        teamChoices();
      });
  
};

const teamChoices = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: `Do you want to add a team member?`,
        name: "chosenEmployeeType",
        choices: [Engineer, Intern, 'Finished'],
      },
    ])
    .then(answers => {
      switch (answers.chosenEmployeeType) {
        case 'Engineer':
          createEngineer();
          break;
        case 'Intern':
          createIntern();
          break;
        case 'Finished':
          finalPrompt();
          break;
      }
    });
};

const createEngineer = () => {
  inquirer
  .prompt([
    {
      type: "input",
      message: `Please enter Engineer's name`,
      name: "engineerName",
    },
    {
      type: "input",
      message: `What is the employee ID?`,
      name: "engineerID",
    },
    {
      type: "input",
      message: `What is their email?`,
      name: "engineerEmail",
    },
    {
      type: "input",
      message: `What is their office number?`,
      name: "engineerOffice",
    },
  ])
  .then(answers => {
    const newEngineer = new Engineer(
      answers.engineerName,
      answers.engineerEmail,
      answers.engineerOffice,
      answers.engineerID
    );
    console.log(newEngineer.name);
    team.push(newEngineer);
    teamIds.push(answers.engineerID);
    teamChoices();
  });
};

const createIntern = () => {
  inquirer
  .prompt([
    {
      type: "input",
      message: `Please enter Intern's name`,
      name: "engineerName",
    },
    {
      type: "input",
      message: `What is the employee ID?`,
      name: "internID",
    },
    {
      type: "input",
      message: `What is their email?`,
      name: "internEmail",
    },
    {
      type: "input",
      message: `What is their office number?`,
      name: "internOffice",
    },
  ])
  .then(answers => {
    const newIntern = new Intern(
      answers.internName,
      answers.internEmail,
      answers.internOffice,
      answers.internID
    );
    team.push(newIntern);
    teamIds.push(answers.internID);
    teamChoices();
  });
};

const finalPrompt = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'Have you added everyone from your team?',
      name: 'teamDone',
      choices: ['Yes', 'Not yet!']
    },
  ])
  .then(answers => {
    switch (answers.teamDone){
      case 'Yes':
        createTeam();
        break;
      case 'Not yet':
        teamChoices();
        break;
        
    };
  });
}

startApp();
