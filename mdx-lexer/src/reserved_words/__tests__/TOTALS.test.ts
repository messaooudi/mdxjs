import TOTALS from "../TOTALS";

test('TOTALS reserved word', () => {
  expect('TOTALS').toMatch(TOTALS.PATTERN as RegExp);
  expect('something else').not.toMatch(TOTALS.PATTERN as RegExp);
});