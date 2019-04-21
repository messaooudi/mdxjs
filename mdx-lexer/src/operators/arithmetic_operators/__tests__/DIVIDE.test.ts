import DIVIDE from "../DIVIDE";

test('DIVIDE arithmetic operator', () => {
  expect('/').toMatch(DIVIDE.pattern as RegExp);
  expect('something else').not.toMatch(DIVIDE.pattern as RegExp);
});