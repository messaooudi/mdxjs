import LINREGVARIANCE from "../LINREGVARIANCE";

test('LINREGVARIANCE reserved word', () => {
  expect('LINREGVARIANCE').toMatch(LINREGVARIANCE.pattern as RegExp);
  expect('something else').not.toMatch(LINREGVARIANCE.pattern as RegExp);
});