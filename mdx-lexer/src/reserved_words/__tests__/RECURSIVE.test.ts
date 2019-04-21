import RECURSIVE from "../RECURSIVE";

test('RECURSIVE reserved word', () => {
  expect('RECURSIVE').toMatch(RECURSIVE.pattern as RegExp);
  expect('something else').not.toMatch(RECURSIVE.pattern as RegExp);
});