import DIMENSION from "../DIMENSION";

test('DIMENSION reserved word', () => {
  expect('DIMENSION').toMatch(DIMENSION.PATTERN as RegExp);
  expect('something else').not.toMatch(DIMENSION.PATTERN as RegExp);
});