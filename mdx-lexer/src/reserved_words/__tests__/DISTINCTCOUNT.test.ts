import DISTINCTCOUNT from "../DISTINCTCOUNT";

test('DISTINCTCOUNT reserved word', () => {
  expect('DISTINCTCOUNT').toMatch(DISTINCTCOUNT.PATTERN as RegExp);
  expect('something else').not.toMatch(DISTINCTCOUNT.PATTERN as RegExp);
});