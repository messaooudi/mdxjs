import CURRENT from "../CURRENT";

test('CURRENT reserved word', () => {
  expect('CURRENT').toMatch(CURRENT.PATTERN as RegExp);
  expect('something else').not.toMatch(CURRENT.PATTERN as RegExp);
});