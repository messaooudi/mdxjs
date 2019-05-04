import BOTTOMCOUNT from "../BOTTOMCOUNT";

test('BOTTOMCOUNT reserved word', () => {
  expect('BOTTOMCOUNT').toMatch(BOTTOMCOUNT.PATTERN as RegExp);
  expect('something else').not.toMatch(BOTTOMCOUNT.PATTERN as RegExp);
});