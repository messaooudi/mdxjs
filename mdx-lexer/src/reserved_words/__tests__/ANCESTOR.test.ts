import ANCESTOR from "../ANCESTOR";

test('ANCESTOR reserved word', () => {
  expect('ANCESTOR').toMatch(ANCESTOR.PATTERN as RegExp);
  expect('something else').not.toMatch(ANCESTOR.PATTERN as RegExp);
});