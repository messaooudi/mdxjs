import IS from "../IS";

test('IS bitwise operator', () => {
  expect('IS').toMatch(IS.PATTERN as RegExp);
  expect('something else').not.toMatch(IS.PATTERN as RegExp);
});