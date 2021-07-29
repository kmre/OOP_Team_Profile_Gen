class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }
    // getName() {
    //     inquirer
    //     .prompt({
    //       type: 'text',
    //       name: 'enterName',
    //       message: 'Enter Name'
    //       //validate after everything runs
    //     })
    //     .then(({ enterName }) => {
    //       this.name = enterName;
    //     }); 
    // }
    // getID() {
    //     inquirer
    //     .prompt({
    //       type: 'text',
    //       name: 'enterId',
    //       message: 'Enter ID'
    //       //validate after everything runs
    //     })
    //     .then(({ enterId }) => {
    //       this.id = enterId;
    //     }); 
    // }
    // getEmail() {
    //     inquirer
    //     .prompt({
    //       type: 'text',
    //       name: 'enterEmail',
    //       message: 'Enter Email'
    //       //validate after everything runs
    //     })
    //     .then(({ enterEmail }) => {
    //       this.email = enterEmail;
    //     }); 
    // }
    // getRole() {
    //     inquirer
    //     .prompt({
    //       type: 'text',
    //       name: 'enterRole',
    //       message: 'Enter Role'
    //       //validate after everything runs
    //     })
    //     .then(({ enterRole }) => {
    //       this.role = enterRole;
    //     }); 
    // }
}
module.exports = Employee;