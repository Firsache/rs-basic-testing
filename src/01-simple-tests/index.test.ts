// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const inputData = { a: 3, b: 2, action: Action.Add };
    const result = simpleCalculator(inputData);
    expect(result).toBe(5);
  });

  test('should subtract two numbers', () => {
    const inputData = { a: 3, b: 2, action: Action.Subtract };
    const result = simpleCalculator(inputData);
    expect(result).toBe(1);
  });

  test('should multiply two numbers', () => {
    const inputData = { a: 3, b: 7, action: Action.Multiply };
    const result = simpleCalculator(inputData);
    expect(result).toBe(21);
  });

  test('should divide two numbers', () => {
    const inputData = { a: 21, b: 7, action: Action.Divide };
    const result = simpleCalculator(inputData);
    expect(result).toBe(3);
  });

  test('should exponentiate two numbers', () => {
    const inputData = { a: 3, b: 3, action: Action.Exponentiate };
    const result = simpleCalculator(inputData);
    expect(result).toBe(27);
  });

  test('should return null for invalid action', () => {
    const inputData = { a: 3, b: 3, action: false };
    const result = simpleCalculator(inputData);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const inputData = { a: false, b: 7, action: Action.Multiply };
    const result = simpleCalculator(inputData);
    expect(result).toBeNull();
  });
});
