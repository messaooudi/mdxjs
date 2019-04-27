import DISTINCT from "../DISTINCT";

test('DISTINCT reserved word', () => {
  expect('DISTINCT').toMatch(DISTINCT.PATTERN as RegExp);
  expect('something else').not.toMatch(DISTINCT.PATTERN as RegExp);
});