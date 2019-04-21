import TOTALS from "../TOTALS";

test('TOTALS reserved word', () => {
  expect('TOTALS').toMatch(TOTALS.pattern as RegExp);
  expect('something else').not.toMatch(TOTALS.pattern as RegExp);
});