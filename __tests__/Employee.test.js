const Employee = require("../lib/Employee");


test('creates Employee object', () => {
    const employee = new Employee('Test');
    //expect(employee.name).toBe('Test');
    //expect(employee.id).toEqual(expect.any(Number));
    //expect(employee.email).toEqual(expect.any(String)); 
    expect(employee.role).toBe("Employee");
  
  });