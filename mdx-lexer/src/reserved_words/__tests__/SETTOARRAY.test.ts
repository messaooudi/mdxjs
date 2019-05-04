import SETTOARRAY from "../SETTOARRAY";

test('SETTOARRAY reserved word', () => {
  expect('SETTOARRAY').toMatch(SETTOARRAY.PATTERN as RegExp);
  expect('something else').not.toMatch(SETTOARRAY.PATTERN as RegExp);
});