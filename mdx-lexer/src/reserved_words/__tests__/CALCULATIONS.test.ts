import CALCULATIONS from "../CALCULATIONS";

test('CALCULATIONS reserved word', () => {
  expect('CALCULATIONS').toMatch(CALCULATIONS.pattern as RegExp);
  expect('something else').not.toMatch(CALCULATIONS.pattern as RegExp);
});