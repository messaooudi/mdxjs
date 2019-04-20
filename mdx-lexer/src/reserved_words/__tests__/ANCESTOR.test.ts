import ANCESTOR from "../ANCESTOR";

test('ANCESTOR reserved word', () => {
  expect('ANCESTOR').toMatch(ANCESTOR.pattern as RegExp);
  expect('something else').not.toMatch(ANCESTOR.pattern as RegExp);
});