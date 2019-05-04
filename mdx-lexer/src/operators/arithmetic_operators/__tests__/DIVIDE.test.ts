import DIVIDE from "../DIVIDE";

test('DIVIDE arithmetic operator', () => {
  expect('/').toMatch(DIVIDE.PATTERN as RegExp);
  expect('something else').not.toMatch(DIVIDE.PATTERN as RegExp);
});