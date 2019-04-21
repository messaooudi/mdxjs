import SETTOARRAY from "../SETTOARRAY";

test('SETTOARRAY reserved word', () => {
  expect('SETTOARRAY').toMatch(SETTOARRAY.pattern as RegExp);
  expect('something else').not.toMatch(SETTOARRAY.pattern as RegExp);
});