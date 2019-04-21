import DISTINCT from "../DISTINCT";

test('DISTINCT reserved word', () => {
  expect('DISTINCT').toMatch(DISTINCT.pattern as RegExp);
  expect('something else').not.toMatch(DISTINCT.pattern as RegExp);
});