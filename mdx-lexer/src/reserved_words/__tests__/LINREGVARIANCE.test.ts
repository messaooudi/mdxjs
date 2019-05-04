import LINREGVARIANCE from "../LINREGVARIANCE";

test('LINREGVARIANCE reserved word', () => {
  expect('LINREGVARIANCE').toMatch(LINREGVARIANCE.PATTERN as RegExp);
  expect('something else').not.toMatch(LINREGVARIANCE.PATTERN as RegExp);
});