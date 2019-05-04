import CALCULATIONS from "../CALCULATIONS";

test('CALCULATIONS reserved word', () => {
  expect('CALCULATIONS').toMatch(CALCULATIONS.PATTERN as RegExp);
  expect('something else').not.toMatch(CALCULATIONS.PATTERN as RegExp);
});