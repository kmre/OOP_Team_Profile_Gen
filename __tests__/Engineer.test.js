const Engineer = require("../lib/Engineer");
jest.mock('../lib/Engineer.js');

test("test new Engineer", () => {
  const engineer = new Engineer("test");

  expect(engineer).toBeInstanceOf(Engineer)
  expect(engineer.name).toBe("test");
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.git).toEqual(expect.any(String));
});

