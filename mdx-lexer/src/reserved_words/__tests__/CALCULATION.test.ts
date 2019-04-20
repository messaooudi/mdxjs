import CALCULATION from "../CALCULATION";

test('CALCULATION reserved word', () => {
  expect('CALCULATION').toMatch(CALCULATION.pattern as RegExp);
  expect('something else').not.toMatch(CALCULATION.pattern as RegExp);
});