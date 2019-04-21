import FOR from "../FOR";

test('FOR reserved word', () => {
  expect('FOR').toMatch(FOR.pattern as RegExp);
  expect('something else').not.toMatch(FOR.pattern as RegExp);
});