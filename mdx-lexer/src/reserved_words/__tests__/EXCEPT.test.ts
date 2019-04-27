import EXCEPT from "../EXCEPT";

test('EXCEPT reserved word', () => {
  expect('EXCEPT').toMatch(EXCEPT.PATTERN as RegExp);
  expect('something else').not.toMatch(EXCEPT.PATTERN as RegExp);
});