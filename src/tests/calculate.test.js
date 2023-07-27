// tests/calculate.test.js

import calculate from "../src/components/calculate";

test('should clear the calculator data when "AC" button is clicked', () => {
  const result = calculate({ total: "5", next: "3", operation: "+" }, "AC");
  expect(result).toEqual({ total: null, next: null, operation: null });
});

test('should update "next" when a number button is clicked', () => {
  const result = calculate({ next: "5", total: null, operation: null }, "3");
  expect(result).toEqual({ next: "53", total: null, operation: null });
});

test('should update "next" and clear the value when "0" is clicked', () => {
  const result = calculate({ next: "5", total: null, operation: null }, "0");
  expect(result).toEqual({});
});

test('should update "next" when "." button is clicked', () => {
  const result = calculate({ next: "5", total: null, operation: null }, ".");
  expect(result).toEqual({ next: "5." });
});

// Add more test cases for other scenarios and edge cases
