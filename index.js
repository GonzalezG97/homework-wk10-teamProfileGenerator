const inquirer = require('inquirer');


inquirer.prompt([
    {
        type: 'input',
        message: `Please enter the Team Manager's name`,
        name: 'managerName',
    },
    {
        type: 'input',
        message: `What is your employee ID?`,
        name: 'managerID',
    },
    {
        type: 'input',
        message: `What is your email?`,
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: `What is your office number?`,
        name: 'managerOffice',
    },

])