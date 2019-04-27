import STRTOSET from "../STRTOSET";

test('STRTOSET reserved word', () => {
  expect('STRTOSET').toMatch(STRTOSET.PATTERN as RegExp);
  expect('something else').not.toMatch(STRTOSET.PATTERN as RegExp);
});