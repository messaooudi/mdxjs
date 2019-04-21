import REGULAR_IDENTIFIER from "../REGULAR_IDENTIFIER";

test('REGULAR_IDENTIFIER identifier', () => {
  expect('Measures').toMatch(REGULAR_IDENTIFIER.pattern as RegExp);
  expect('_style01').toMatch(REGULAR_IDENTIFIER.pattern as RegExp);
  expect('_').toMatch(REGULAR_IDENTIFIER.pattern as RegExp);
  expect('$invalid').not.toMatch(REGULAR_IDENTIFIER.pattern as RegExp);
  expect('01invalid').not.toMatch(REGULAR_IDENTIFIER.pattern as RegExp);
});