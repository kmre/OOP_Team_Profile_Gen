const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, git) {
       super(name,id,email);
       this.git = git;
       // this.role = "Manager";
       this.role = "Engineer";
    }
    
  getInfo2() {
    return {
      name: this.name,
      id: this.id,
      email: this.email,
      role: this.role,
      git: this.git
    };
  }
}

module.exports = Engineer;