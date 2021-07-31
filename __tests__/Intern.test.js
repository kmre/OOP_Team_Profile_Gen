const Intern = require("../lib/Intern");
jest.mock('../lib/Intern.js');

test("test new intern", () => {
  const intern = new Intern("test");

  expect(intern).toBeInstanceOf(Intern)
  expect(intern.name).toBe("test");
  expect(intern.id).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

