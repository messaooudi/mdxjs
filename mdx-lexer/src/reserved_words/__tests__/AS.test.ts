import AS from "../AS";

test('AS reserved word', () => {
  expect('AS').toMatch(AS.PATTERN as RegExp);
  expect('something else').not.toMatch(AS.PATTERN as RegExp);
});