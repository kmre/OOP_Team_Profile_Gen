const Employee = require("../lib/Employee");

jest.mock('../lib/Employee.js');

test("test employee object", () => {
  const employee = new Employee("test");

  expect(employee).toBeInstanceOf(Employee)
  expect(employee.name).toBe("test");
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));

});

