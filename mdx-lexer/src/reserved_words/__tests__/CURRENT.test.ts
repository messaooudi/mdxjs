import CURRENT from "../CURRENT";

test('CURRENT reserved word', () => {
  expect('CURRENT').toMatch(CURRENT.pattern as RegExp);
  expect('something else').not.toMatch(CURRENT.pattern as RegExp);
});