import DISTINCTCOUNT from "../DISTINCTCOUNT";

test('DISTINCTCOUNT reserved word', () => {
  expect('DISTINCTCOUNT').toMatch(DISTINCTCOUNT.pattern as RegExp);
  expect('something else').not.toMatch(DISTINCTCOUNT.pattern as RegExp);
});