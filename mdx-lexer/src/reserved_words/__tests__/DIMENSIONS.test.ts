import DIMENSIONS from "../DIMENSIONS";

test('DIMENSIONS reserved word', () => {
  expect('DIMENSIONS').toMatch(DIMENSIONS.pattern as RegExp);
  expect('something else').not.toMatch(DIMENSIONS.pattern as RegExp);
});