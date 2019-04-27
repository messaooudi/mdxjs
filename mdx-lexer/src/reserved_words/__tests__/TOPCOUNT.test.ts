import TOPCOUNT from "../TOPCOUNT";

test('TOPCOUNT reserved word', () => {
  expect('TOPCOUNT').toMatch(TOPCOUNT.PATTERN as RegExp);
  expect('something else').not.toMatch(TOPCOUNT.PATTERN as RegExp);
});