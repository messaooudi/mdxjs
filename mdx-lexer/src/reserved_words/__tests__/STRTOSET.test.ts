import STRTOSET from "../STRTOSET";

test('STRTOSET reserved word', () => {
  expect('STRTOSET').toMatch(STRTOSET.pattern as RegExp);
  expect('something else').not.toMatch(STRTOSET.pattern as RegExp);
});