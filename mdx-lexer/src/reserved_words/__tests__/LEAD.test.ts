import LEAD from "../LEAD";

test('LEAD reserved word', () => {
  expect('LEAD').toMatch(LEAD.PATTERN as RegExp);
  expect('something else').not.toMatch(LEAD.PATTERN as RegExp);
});