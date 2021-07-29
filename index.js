const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

class Profile {
    constructor() {
        this.user = new Employee("Employee");
        this.employees = [];
    }
    async getName() {
       return inquirer
        .prompt({
          type: 'input',
          name: 'enterName',
          message: 'Enter Name',
          validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
            }
        })
        .then(({ enterName }) => {
            console.log("Name -------------")
            console.log(enterName)
            //this.user = new Employee(enterName);
            return enterName;
        })

    }
    async getID() {
        return inquirer
        .prompt({
          type: 'text',
          name: 'enterId',
          message: 'Enter ID'
          //validate after everything runs
        })
        .then(({ enterId }) => {
            // this.id = new Manager(enterId);
            // console.log(this.user.name);
            // console.log(this.user.id);
            return enterId;
        }); 
    }
    async getEmail() {
        return inquirer
        .prompt({
          type: 'text',
          name: 'enterEmail',
          message: 'Enter Email'
          //validate after everything runs
        })
        .then(({ enterEmail }) => {
        //   this.email = new Employee(enterEmail);
        //   console.log(this.user.name);
        //   console.log(this.user.email);
        return enterEmail;
        }); 
    }
    async getRole() {
        return inquirer
        .prompt({
          type: 'text',
          name: 'enterRole',
          message: 'Enter Role'
          //validate after everything runs
        })
        .then(({ enterRole }) => {
        //   this.role = enterRole;
        return enterRole;
        }); 
    }
    async startProfileGen() {
        console.log("Start Profile Gen ------")
        let name = await this.getName();
        let id = await this.getID();
        let email = await this.getEmail();
        let role = await this.getRole();

        //console.log(name);
        //console.log(id);
        //console.log(email);
       // console.log(role);
    };
    startNewTeam() {

    }





}


new Profile().startProfileGen();

module.exports = Profile;