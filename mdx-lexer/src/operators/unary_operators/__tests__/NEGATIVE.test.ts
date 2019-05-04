import NEGATIVE from "../NEGATIVE";

test('NEGATIVE unary operator', () => {
  expect('-').toMatch(NEGATIVE.PATTERN as RegExp);
  expect('something else').not.toMatch(NEGATIVE.PATTERN as RegExp);
});