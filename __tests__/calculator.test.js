import calculator from '../src/calculator';

test('function returns sum of two numbers', () => {
  expect(calculator.add(2, 4)).toBe(6);
});

test('function returns difference of subtracting two numbers', () => {
  expect(calculator.subtract(2, 4)).toBe(-2);
});

test('function returns division of two numbers', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('function returns product of multiplying two numbers', () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});