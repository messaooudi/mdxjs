import EXCEPT from "../EXCEPT";

test('EXCEPT set operator', () => {
  expect('-').toMatch(EXCEPT.pattern as RegExp);
  expect('something else').not.toMatch(EXCEPT.pattern as RegExp);
});