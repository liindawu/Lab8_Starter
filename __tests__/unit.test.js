// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('is (925) 551-7880 a phone number', () => {
    expect(functions.isPhoneNumber('(925) 551-7880')).toBe(true);
});

test('is 408-564-1367 a phone number', () => {
    expect(functions.isPhoneNumber('408-564-1367')).toBe(true);
});

test('is (925)551-788 a phone number', () => {
    expect(functions.isPhoneNumber('(925)551-788')).toBe(false);
});

test('is 911 a phone number', () => {
    expect(functions.isPhoneNumber('911')).toBe(false);
});

test('is poopypants@gmail.com an email', () => {
    expect(functions.isEmail('poopypants@gmail.com')).toBe(true);
});

test('is fart@gmail.com an email', () => {
    expect(functions.isEmail('fart@gmail.com')).toBe(true);
});

test('is poopypants.com an email', () => {
    expect(functions.isEmail('poopypants.com')).toBe(false);
});

test('is poopypants@gmail.notanemail an email', () => {
    expect(functions.isEmail('poopypants@gmail.notanemail')).toBe(false);
});

test('is m0ther a strong password', () => {
    expect(functions.isStrongPassword('m0ther')).toBe(true);
});

test('is powell a strong password', () => {
    expect(functions.isStrongPassword('powell')).toBe(true);
});

test('is poo a strong password', () => {
    expect(functions.isStrongPassword('poo')).toBe(false);
});

test('is weeeeeeeeeeeeeee a strong password', () => {
    expect(functions.isStrongPassword('weeeeeeeeeeeeeee')).toBe(false);
});

test('is 05/14/2002 a date', () => {
    expect(functions.isDate('05/14/2002')).toBe(true);
});

test('is 1/2/2023 a date', () => {
    expect(functions.isDate('1/2/2023')).toBe(true);
});

test('is 1/2/2 a date', () => {
    expect(functions.isDate('1/2/2')).toBe(false);
});

test('is 02/5 a date', () => {
    expect(functions.isDate('02/5')).toBe(false);
});

test('is #ffffff a hex color', () => {
    expect(functions.isHexColor('#ffffff')).toBe(true);
});

test('is #f82d92 a hex color', () => {
    expect(functions.isHexColor('#f82d92')).toBe(true);
});

test('is #ffff a hex color', () => {
    expect(functions.isHexColor('#ffff')).toBe(false);
});

test('is #dawg a hex color', () => {
    expect(functions.isHexColor('#dawg')).toBe(false);
});