import CALCULATE from "../CALCULATE";

test('CALCULATE reserved word', () => {
  expect('CALCULATE').toMatch(CALCULATE.pattern as RegExp);
  expect('something else').not.toMatch(CALCULATE.pattern as RegExp);
});