import EQUAL_TO from "../EQUAL_TO";

test('EQUAL_TO comparison operator', () => {
  expect('=').toMatch(EQUAL_TO.pattern as RegExp);
  expect('something else').not.toMatch(EQUAL_TO.pattern as RegExp);
});