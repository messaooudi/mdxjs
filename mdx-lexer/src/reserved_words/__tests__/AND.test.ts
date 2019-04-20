import AND from "../AND";

test('AND reserved word', () => {
  expect('AND').toMatch(AND.pattern as RegExp);
  expect('something else').not.toMatch(AND.pattern as RegExp);
});