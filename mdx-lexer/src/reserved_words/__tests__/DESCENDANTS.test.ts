import DESCENDANTS from "../DESCENDANTS";

test('DESCENDANTS reserved word', () => {
  expect('DESCENDANTS').toMatch(DESCENDANTS.PATTERN as RegExp);
  expect('something else').not.toMatch(DESCENDANTS.PATTERN as RegExp);
});