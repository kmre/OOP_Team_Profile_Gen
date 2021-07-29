const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, role, office) {
        super(name,id,email);
        this.office = office;
        // this.role = "Manager";
        this.role = role;
    }
    
  getInfo() {
    return {
      name: this.name,
      id: this.id,
      email: this.email,
      role: this.role,
      office: this.office
    };
  }
}

module.exports = Manager;
