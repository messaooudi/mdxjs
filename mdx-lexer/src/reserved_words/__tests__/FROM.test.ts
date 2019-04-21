import FROM from "../FROM";

test('FROM reserved word', () => {
  expect('FROM').toMatch(FROM.pattern as RegExp);
  expect('something else').not.toMatch(FROM.pattern as RegExp);
});