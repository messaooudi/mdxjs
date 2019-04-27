import NOT_EQUAL_TO from "../NOT_EQUAL_TO";

test('NOT_EQUAL_TO comparison operator', () => {
  expect('<>').toMatch(NOT_EQUAL_TO.PATTERN as RegExp);
  expect('something else').not.toMatch(NOT_EQUAL_TO.PATTERN as RegExp);
});