import VISUALTOTALS from "../VISUALTOTALS";

test('VISUALTOTALS reserved word', () => {
  expect('VISUALTOTALS').toMatch(VISUALTOTALS.PATTERN as RegExp);
  expect('something else').not.toMatch(VISUALTOTALS.PATTERN as RegExp);
});