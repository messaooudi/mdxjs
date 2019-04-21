import MULTIPLY from "../MULTIPLY";

test('MULTIPLY arithmetic operator', () => {
  expect('*').toMatch(MULTIPLY.pattern as RegExp);
  expect('something else').not.toMatch(MULTIPLY.pattern as RegExp);
});