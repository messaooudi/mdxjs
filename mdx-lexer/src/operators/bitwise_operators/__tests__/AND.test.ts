import AND from "../AND";

test('AND bitwise operator', () => {
  expect('AND').toMatch(AND.PATTERN as RegExp);
  expect('something else').not.toMatch(AND.PATTERN as RegExp);
});