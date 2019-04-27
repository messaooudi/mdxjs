import WITH from "../WITH";

test('WITH reserved word', () => {
  expect('WITH').toMatch(WITH.PATTERN as RegExp);
  expect('something else').not.toMatch(WITH.PATTERN as RegExp);
});