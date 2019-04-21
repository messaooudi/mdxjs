import NEGATIVE from "../NEGATIVE";

test('NEGATIVE unary operator', () => {
  expect('-').toMatch(NEGATIVE.pattern as RegExp);
  expect('something else').not.toMatch(NEGATIVE.pattern as RegExp);
});