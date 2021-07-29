const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name,id,email);
        this.school = school;
        // this.role = "Manager";
        this.role = "Intern";
     }
     
   getInfo3() {
     return {
       name: this.name,
       id: this.id,
       email: this.email,
       role: this.role,
       school: this.school
     };
   }
 }


module.exports = Intern;