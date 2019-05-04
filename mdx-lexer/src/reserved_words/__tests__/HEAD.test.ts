import HEAD from "../HEAD";

test('HEAD reserved word', () => {
  expect('HEAD').toMatch(HEAD.PATTERN as RegExp);
  expect('something else').not.toMatch(HEAD.PATTERN as RegExp);
});