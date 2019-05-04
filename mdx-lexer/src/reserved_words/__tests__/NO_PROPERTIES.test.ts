import NO_PROPERTIES from "../NO_PROPERTIES";

test('NO_PROPERTIES reserved word', () => {
  expect('NO_PROPERTIES').toMatch(NO_PROPERTIES.PATTERN as RegExp);
  expect('something else').not.toMatch(NO_PROPERTIES.PATTERN as RegExp);
});