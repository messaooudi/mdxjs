import AS from "../AS";

test('AS reserved word', () => {
  expect('AS').toMatch(AS.pattern as RegExp);
  expect('something else').not.toMatch(AS.pattern as RegExp);
});