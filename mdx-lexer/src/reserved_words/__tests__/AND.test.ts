import AND from "../AND";

test('AND reserved word', () => {
  expect('AND').toMatch(AND.PATTERN as RegExp);
  expect('something else').not.toMatch(AND.PATTERN as RegExp);
});