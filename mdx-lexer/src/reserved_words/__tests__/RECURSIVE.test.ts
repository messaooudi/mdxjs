import RECURSIVE from "../RECURSIVE";

test('RECURSIVE reserved word', () => {
  expect('RECURSIVE').toMatch(RECURSIVE.PATTERN as RegExp);
  expect('something else').not.toMatch(RECURSIVE.PATTERN as RegExp);
});