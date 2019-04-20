import BOTTOMCOUNT from "../BOTTOMCOUNT";

test('BOTTOMCOUNT reserved word', () => {
  expect('BOTTOMCOUNT').toMatch(BOTTOMCOUNT.pattern as RegExp);
  expect('something else').not.toMatch(BOTTOMCOUNT.pattern as RegExp);
});