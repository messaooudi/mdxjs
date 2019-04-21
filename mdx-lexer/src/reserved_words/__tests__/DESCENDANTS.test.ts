import DESCENDANTS from "../DESCENDANTS";

test('DESCENDANTS reserved word', () => {
  expect('DESCENDANTS').toMatch(DESCENDANTS.pattern as RegExp);
  expect('something else').not.toMatch(DESCENDANTS.pattern as RegExp);
});