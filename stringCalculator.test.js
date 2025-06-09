const { add } = require('./stringCalculator');

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns the number for a single number input', () => {
    expect(add("1")).toBe(1);
  });

  test('returns the sum of two comma-separated numbers', () => {
    expect(add("1,5")).toBe(6);
  });

  test('handles an unknown number of comma-separated numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test('handles new lines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('supports custom single-character delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('throws exception for negative numbers', () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed -2");
  });

  test('shows all negative numbers in exception', () => {
    expect(() => add("-1,-3,4")).toThrow("negative numbers not allowed -1,-3");
  });
});
