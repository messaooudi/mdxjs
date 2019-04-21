import LEVEL from "../LEVEL";

test('LEVEL reserved word', () => {
  expect('LEVEL').toMatch(LEVEL.pattern as RegExp);
  expect('something else').not.toMatch(LEVEL.pattern as RegExp);
});