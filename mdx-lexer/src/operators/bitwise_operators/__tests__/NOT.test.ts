import NOT from "../NOT";

test('NOT bitwise operator', () => {
  expect('NOT').toMatch(NOT.PATTERN as RegExp);
  expect('something else').not.toMatch(NOT.PATTERN as RegExp);
});