import WITH from "../WITH";

test('WITH reserved word', () => {
  expect('WITH').toMatch(WITH.pattern as RegExp);
  expect('something else').not.toMatch(WITH.pattern as RegExp);
});