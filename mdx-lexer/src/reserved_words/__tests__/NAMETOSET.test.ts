import NAMETOSET from "../NAMETOSET";

test('NAMETOSET reserved word', () => {
  expect('NAMETOSET').toMatch(NAMETOSET.PATTERN as RegExp);
  expect('something else').not.toMatch(NAMETOSET.PATTERN as RegExp);
});