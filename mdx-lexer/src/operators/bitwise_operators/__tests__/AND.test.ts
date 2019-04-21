import AND from "../AND";

test('AND bitwise operator', () => {
  expect('AND').toMatch(AND.pattern as RegExp);
  expect('something else').not.toMatch(AND.pattern as RegExp);
});