import CALCULATE from "../CALCULATE";

test('CALCULATE reserved word', () => {
  expect('CALCULATE').toMatch(CALCULATE.PATTERN as RegExp);
  expect('something else').not.toMatch(CALCULATE.PATTERN as RegExp);
});