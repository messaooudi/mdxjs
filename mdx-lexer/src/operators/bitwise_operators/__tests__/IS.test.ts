import IS from "../IS";

test('IS bitwise operator', () => {
  expect('IS').toMatch(IS.pattern as RegExp);
  expect('something else').not.toMatch(IS.pattern as RegExp);
});