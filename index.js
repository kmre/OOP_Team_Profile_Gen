const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

class Profile {
    constructor() {
        this.startRole = new Employee("Employee");
        this.user;
        this.employees = [];
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
            //console.log("Name -------------")
            //console.log(enterName)
            //this.user = new Employee(enterName);
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
            // this.id = new Manager(enterId);
            // console.log(this.user.name);
            // console.log(this.user.id);
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
        //   this.email = new Employee(enterEmail);
        //   console.log(this.user.name);
        //   console.log(this.user.email);
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
    //starts grabbing data fns
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
            //console.log(roleUp)
            //console.log(office)
            console.table(this.user.getInfo())
        }
    };

/////////////////////////////////////////////////
    startNewTeam() {

    }





}


new Profile().startProfileGen();

module.exports = Profile;