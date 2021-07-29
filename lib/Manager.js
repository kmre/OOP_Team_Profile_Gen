const Employee = require("./Employee");

class Manager extends Employee {
<<<<<<< HEAD
    constructor(name = "") {
        super(name);

    }
    
    getName() {

    }

    getID() {


    }

    getEmail() {


    }

    getRole() {

        
=======
    constructor(name, id, email, role, officeNumber) {
        super(name,id,email);
        this.office = officeNumber;
        this.role = "Manager";
>>>>>>> 709551e9b7678262a0f66bc048f1cc04e18aabff
    }

}

<<<<<<< HEAD
module.exports = Manager;
=======
module.exports = Manager;
>>>>>>> 709551e9b7678262a0f66bc048f1cc04e18aabff
