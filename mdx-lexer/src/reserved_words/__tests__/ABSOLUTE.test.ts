import ABSOLUTE from "../ABSOLUTE";

test('ABSOLUTE reserved word', () => {
  expect('ABSOLUTE').toMatch(ABSOLUTE.pattern as RegExp);
  expect('something else').not.toMatch(ABSOLUTE.pattern as RegExp);
});