import NAMETOSET from "../NAMETOSET";

test('NAMETOSET reserved word', () => {
  expect('NAMETOSET').toMatch(NAMETOSET.pattern as RegExp);
  expect('something else').not.toMatch(NAMETOSET.pattern as RegExp);
});