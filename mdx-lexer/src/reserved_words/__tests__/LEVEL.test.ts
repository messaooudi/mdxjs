import LEVEL from "../LEVEL";

test('LEVEL reserved word', () => {
  expect('LEVEL').toMatch(LEVEL.PATTERN as RegExp);
  expect('something else').not.toMatch(LEVEL.PATTERN as RegExp);
});