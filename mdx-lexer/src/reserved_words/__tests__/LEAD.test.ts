import LEAD from "../LEAD";

test('LEAD reserved word', () => {
  expect('LEAD').toMatch(LEAD.pattern as RegExp);
  expect('something else').not.toMatch(LEAD.pattern as RegExp);
});