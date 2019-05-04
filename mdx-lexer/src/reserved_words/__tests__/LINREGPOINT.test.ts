import LINREGPOINT from "../LINREGPOINT";

test('LINREGPOINT reserved word', () => {
  expect('LINREGPOINT').toMatch(LINREGPOINT.PATTERN as RegExp);
  expect('something else').not.toMatch(LINREGPOINT.PATTERN as RegExp);
});