import VISUALTOTALS from "../VISUALTOTALS";

test('VISUALTOTALS reserved word', () => {
  expect('VISUALTOTALS').toMatch(VISUALTOTALS.pattern as RegExp);
  expect('something else').not.toMatch(VISUALTOTALS.pattern as RegExp);
});