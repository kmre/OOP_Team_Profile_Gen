const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name,id,email);
        this.office = officeNumber;
        this.role = "Manager";
    }

}

module.exports = Manager;