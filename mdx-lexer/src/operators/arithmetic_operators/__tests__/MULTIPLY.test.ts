import MULTIPLY from "../MULTIPLY";

test('MULTIPLY arithmetic operator', () => {
  expect('*').toMatch(MULTIPLY.PATTERN as RegExp);
  expect('something else').not.toMatch(MULTIPLY.PATTERN as RegExp);
});