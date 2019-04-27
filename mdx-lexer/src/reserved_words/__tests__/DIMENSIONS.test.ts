import DIMENSIONS from "../DIMENSIONS";

test('DIMENSIONS reserved word', () => {
  expect('DIMENSIONS').toMatch(DIMENSIONS.PATTERN as RegExp);
  expect('something else').not.toMatch(DIMENSIONS.PATTERN as RegExp);
});