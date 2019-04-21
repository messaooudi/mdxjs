import HEAD from "../HEAD";

test('HEAD reserved word', () => {
  expect('HEAD').toMatch(HEAD.pattern as RegExp);
  expect('something else').not.toMatch(HEAD.pattern as RegExp);
});