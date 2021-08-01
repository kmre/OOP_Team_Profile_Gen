const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const genFrame = require('./src/page-template');
const fs = require("fs");

class Profile {
    constructor() {
        this.startRole = new Employee("Employee");
        this.user;
        this.employees = [];
        this.entry;
    }
    //////////////////////////////////
    async getName() {
       return inquirer
        .prompt({
          type: 'input',
          name: 'enterName',
          message: 'Please Enter Name:',
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
            return enterName;
        })
    }
    /////////////////////////////
    async getID() {
        return inquirer
        .prompt({
          type: 'text',
          name: 'enterId',
          message: 'Enter ID:',
          validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
            }
        })
        .then(({ enterId }) => {
            return enterId;
        }); 
    }
    /////////////////////////////////////
    async getEmail() {
        return inquirer
        .prompt({
          type: 'text',
          name: 'enterEmail',
          message: 'Enter Email:',
          validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
            }
        })
        .then(({ enterEmail }) => {
        return enterEmail;
        }); 
    }
    ///////////////////////////////////////
    async getRole() {
        return inquirer
        .prompt({
          type: 'text',
          name: 'enterRole',
          message: 'Enter Role:',
          validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
            }
        })
        .then(({ enterRole }) => {
        //   this.role = enterRole;
        return enterRole;
        }); 
    }
    async getOffice() {
        return inquirer
         .prompt({
           type: 'input',
           name: 'enterOffice',
           message: "Please Enter Manager's Office Number:",
           validate: input => {
             if (input) {
                 return true;
             } else {
                 console.log('Answer can not be left blank! \n');
                 return false;
             }
             }
         })
         .then(({ enterOffice }) => {
             return enterOffice;
         })
     }
    async getGit() {
        return inquirer
        .prompt({
          type: 'input',
          name: 'enterGit',
          message: "Please Enter Engineer's Github username:",
          validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
            }
        })
        .then(({ enterGit }) => {
            return enterGit;
        })
    }
    async getSchool() {
        return inquirer
        .prompt({
          type: 'input',
          name: 'enterSchool',
          message: "Please Enter Intern's School:",
          validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
            }
        })
        .then(({ enterSchool }) => {
            return enterSchool;
        })
    }    
///////////////////////////////////////////////////////
    //make the first letter upper case
    upperCase(input) {
        const arr = input.split(" ");
        for (var i = 0; i < arr.length; i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const output = arr.join(" ");
        return output;
    }

    ///////////////////////////////////////
    //starts grabbing data fns for Manager
    async startProfileGen() {
        console.log("\nStart Profile Gen ------ \n")
        let name = await this.getName();
        name = name.toLowerCase();
        let id = await this.getID();
        let email = await this.getEmail();
        let role = await this.getRole();
        role = role.toLowerCase();
 
        const nameUp = this.upperCase(name);
        const roleUp = this.upperCase(role);

        if (roleUp != "Manager") {
            console.log("\nSorry " + `${nameUp}` + ", only Managers can create teams.\n")
            return;
        }
        else {
            console.log("\nWelcome " + `${nameUp}!\n`)            
            let office = await this.getOffice();
            this.user = new Manager(nameUp, id, email, roleUp, office);
            //console.log("\n------Manager Information------------\n")
            //console.table(this.user.getInfo())
            //console.log(this.employees)
            this.addTeam();
        }
    }
    //choices for team members
    async addTeam() {
        //console.log("\nLet's start a Team!\n")
        return inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: ['Add an Engineer to the Team', 'Add an Intern to the Team', 'Finish building the Team']
        })
        .then(({choice}) => {
          this.checkChoice(choice)
        })
    }
    //get information for the choice made
    async checkChoice(choice) {
        console.log(choice)
        if (choice == 'Finish building the Team' && (this.employees.length == 0)) {
            console.log("At least one member must be added!")
            this.addTeam();
        }
        else if (choice == 'Add an Engineer to the Team') {
            console.log('engineer')
            let name = await this.getName();
                name = name.toLowerCase();
                const nameUp = this.upperCase(name);
            let id = await this.getID();
            let email = await this.getEmail();
            let gitUser = await this.getGit();
            this.entry = new Engineer(nameUp, id, email, gitUser)
            this.employees.push(this.entry)
            //console.log("\n--------Eng Info-------------")
            //console.table(this.entry.getInfo2())                       
            //console.log(this.entry)
            //console.log(this.employees)
            this.addTeam();
        }
        else if (choice == 'Add an Intern to the Team') {
            console.log('intern')
            let name = await this.getName();
                name = name.toLowerCase();
                const nameUp = this.upperCase(name);
            let id = await this.getID();
            let email = await this.getEmail();
            let school = await this.getSchool();
            this.entry = new Intern(nameUp, id, email, school)
            this.employees.push(this.entry)
            //console.log("\n--------Intern Info-------------")
            //console.table(this.entry.getInfo3())                       
            //console.log(this.entry)
            //console.log(this.employees)
            this.addTeam();
        }
        else if (choice == 'Finish building the Team' && (this.employees.length != 0)) {
            console.log('Generating HTML');
            this.genHTML();
        }
    }
    //generate the wireframe for the HTML
    genHTML() {
        let manager = this.user.getInfo();
        let arrayEmployees = this.employees;
        console.table(this.user.getInfo())
        console.table(this.employees)
        const frame = genFrame(manager, arrayEmployees);
        this.printPage(frame);
    }
    //create html
    printPage (frameHtml) {
        fs.writeFile("./dist/index.html", frameHtml, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("HTML file generated!");
          }
        });
      };
}

new Profile().startProfileGen();

module.exports = Profile;