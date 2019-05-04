import FILTER from "../FILTER";

test('FILTER reserved word', () => {
  expect('FILTER').toMatch(FILTER.PATTERN as RegExp);
  expect('something else').not.toMatch(FILTER.PATTERN as RegExp);
});