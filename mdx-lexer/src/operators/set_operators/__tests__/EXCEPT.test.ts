import EXCEPT from "../EXCEPT";

test('EXCEPT set operator', () => {
  expect('-').toMatch(EXCEPT.PATTERN as RegExp);
  expect('something else').not.toMatch(EXCEPT.PATTERN as RegExp);
});