import TOPCOUNT from "../TOPCOUNT";

test('TOPCOUNT reserved word', () => {
  expect('TOPCOUNT').toMatch(TOPCOUNT.pattern as RegExp);
  expect('something else').not.toMatch(TOPCOUNT.pattern as RegExp);
});