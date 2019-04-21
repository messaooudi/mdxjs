import LINREGPOINT from "../LINREGPOINT";

test('LINREGPOINT reserved word', () => {
  expect('LINREGPOINT').toMatch(LINREGPOINT.pattern as RegExp);
  expect('something else').not.toMatch(LINREGPOINT.pattern as RegExp);
});