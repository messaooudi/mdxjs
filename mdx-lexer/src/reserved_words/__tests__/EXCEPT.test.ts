import EXCEPT from "../EXCEPT";

test('EXCEPT reserved word', () => {
  expect('EXCEPT').toMatch(EXCEPT.pattern as RegExp);
  expect('something else').not.toMatch(EXCEPT.pattern as RegExp);
});