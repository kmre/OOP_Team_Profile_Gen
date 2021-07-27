const Manager = require("../lib/Manager");

test('creates a manager object', () => {
    const manager = new Manager('Test');
    expect(manager.name).toBe('Test');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toBe("Employee");
  
  });