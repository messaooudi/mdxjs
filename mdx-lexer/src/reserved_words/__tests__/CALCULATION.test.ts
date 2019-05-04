import CALCULATION from "../CALCULATION";

test('CALCULATION reserved word', () => {
  expect('CALCULATION').toMatch(CALCULATION.PATTERN as RegExp);
  expect('something else').not.toMatch(CALCULATION.PATTERN as RegExp);
});