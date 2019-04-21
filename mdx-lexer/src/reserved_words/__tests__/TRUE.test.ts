import TRUE from "../TRUE";

test('TRUE reserved word', () => {
  expect('TRUE').toMatch(TRUE.pattern as RegExp);
  expect('something else').not.toMatch(TRUE.pattern as RegExp);
});