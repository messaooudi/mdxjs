import FROM from "../FROM";

test('FROM reserved word', () => {
  expect('FROM').toMatch(FROM.PATTERN as RegExp);
  expect('something else').not.toMatch(FROM.PATTERN as RegExp);
});