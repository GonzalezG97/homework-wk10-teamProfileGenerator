const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNum){
        this.officeNum = officeNum
    };

    getRole(){

    }
};

module.exports = Manager;