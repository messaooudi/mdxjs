import DECIMAL from "../DECIMAL";

test('DECIMAL number', () => {
  expect(".25").toMatch(DECIMAL.PATTERN as RegExp);
  expect("1.25").toMatch(DECIMAL.PATTERN as RegExp);
  expect("1.25E+5").toMatch(DECIMAL.PATTERN as RegExp);
  expect("2.25E-99").toMatch(DECIMAL.PATTERN as RegExp);
  expect(".25E89").toMatch(DECIMAL.PATTERN as RegExp);
  expect('123').not.toMatch(DECIMAL.PATTERN as RegExp);
  expect('something else').not.toMatch(DECIMAL.PATTERN as RegExp);
});