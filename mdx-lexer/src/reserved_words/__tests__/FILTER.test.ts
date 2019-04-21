import FILTER from "../FILTER";

test('FILTER reserved word', () => {
  expect('FILTER').toMatch(FILTER.pattern as RegExp);
  expect('something else').not.toMatch(FILTER.pattern as RegExp);
});