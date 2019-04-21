import NOT from "../NOT";

test('NOT bitwise operator', () => {
  expect('NOT').toMatch(NOT.pattern as RegExp);
  expect('something else').not.toMatch(NOT.pattern as RegExp);
});