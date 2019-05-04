import FOR from "../FOR";

test('FOR reserved word', () => {
  expect('FOR').toMatch(FOR.PATTERN as RegExp);
  expect('something else').not.toMatch(FOR.PATTERN as RegExp);
});