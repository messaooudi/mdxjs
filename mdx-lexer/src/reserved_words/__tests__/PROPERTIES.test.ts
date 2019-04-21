import PROPERTIES from "../PROPERTIES";

test('PROPERTIES reserved word', () => {
  expect('PROPERTIES').toMatch(PROPERTIES.pattern as RegExp);
  expect('something else').not.toMatch(PROPERTIES.pattern as RegExp);
});