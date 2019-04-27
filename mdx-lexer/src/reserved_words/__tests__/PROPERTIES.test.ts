import PROPERTIES from "../PROPERTIES";

test('PROPERTIES reserved word', () => {
  expect('PROPERTIES').toMatch(PROPERTIES.PATTERN as RegExp);
  expect('something else').not.toMatch(PROPERTIES.PATTERN as RegExp);
});