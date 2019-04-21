import DIMENSION from "../DIMENSION";

test('DIMENSION reserved word', () => {
  expect('DIMENSION').toMatch(DIMENSION.pattern as RegExp);
  expect('something else').not.toMatch(DIMENSION.pattern as RegExp);
});