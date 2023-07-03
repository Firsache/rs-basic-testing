// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 4, b: 2, action: Action.Subtract, expected: 2 },
  { a: 3, b: 3, action: Action.Multiply, expected: 9 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 6, b: 2, action: Action.Exponentiate, expected: 36 },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return results which are expected in each case',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );
});
