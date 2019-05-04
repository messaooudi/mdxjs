import TRUE from "../TRUE";

test('TRUE reserved word', () => {
  expect('TRUE').toMatch(TRUE.PATTERN as RegExp);
  expect('something else').not.toMatch(TRUE.PATTERN as RegExp);
});