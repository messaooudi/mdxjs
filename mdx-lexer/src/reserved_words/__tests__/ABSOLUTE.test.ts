import ABSOLUTE from "../ABSOLUTE";

test('ABSOLUTE reserved word', () => {
  expect('ABSOLUTE').toMatch(ABSOLUTE.PATTERN as RegExp);
  expect('something else').not.toMatch(ABSOLUTE.PATTERN as RegExp);
});