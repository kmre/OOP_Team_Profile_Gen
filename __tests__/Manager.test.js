const Manager = require("../lib/Manager");
jest.mock('../lib/Manager.js');

test("test new manager", () => {
  const manager = new Manager("test");

  expect(manager).toBeInstanceOf(Manager)
  expect(manager.name).toBe("test");
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.office).toEqual(expect.any(String));
});

