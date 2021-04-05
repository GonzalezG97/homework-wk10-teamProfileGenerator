const Employee = require('../lib/Employee');

test('Can create name from constructor arguments', () => {
    const name = 'Gus';
    const employee = new Employee(name);

    expect(employee.name).toBe(name);

}); 

test('Can create id from constructor arguments', () => {
    const id = 5;
    const employee = new Employee('Gus', id);

    expect(employee.id).toBe(id);
});

test('Can create email from constructor arguments', () => {
    const email = 'gustavoshadow13@gmail.com';
    const employee = new Employee('Gus', 5, email);

    expect(employee.email).toBe(email);
});

test('Can grab name from the getName()', () => {
    const name = 'John';
    const employee = new Employee(name);

    expect(employee.getName()).toBe(name);
});