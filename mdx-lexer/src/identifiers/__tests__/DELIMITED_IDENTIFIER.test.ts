import DELIMITED_IDENTIFIER from "../DELIMITED_IDENTIFIER";

test('DELIMITED_IDENTIFIER identifier', () => {
  expect('[Measures]').toMatch(DELIMITED_IDENTIFIER.PATTERN as RegExp);
  expect('[valid identifies]').toMatch(DELIMITED_IDENTIFIER.PATTERN as RegExp);
  expect('[another [ valid identifier]').toMatch(DELIMITED_IDENTIFIER.PATTERN as RegExp);
  expect('[invalid').not.toMatch(DELIMITED_IDENTIFIER.PATTERN as RegExp);
  expect('invalid').not.toMatch(DELIMITED_IDENTIFIER.PATTERN as RegExp);
  //TODO: add test for double closing BRACKETS ]] once its supported
});