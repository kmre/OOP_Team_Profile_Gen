const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

startProfileGen();

class ProfileGen {

    constructor() {
        //initialize?
        this.user;
        this.employees = [];

    }

    startProfileGen() {
        this.user = new Employee();
    };

    startNewTeam() {
        console.log("test");
    }





}






module.exports = ProfileGen;