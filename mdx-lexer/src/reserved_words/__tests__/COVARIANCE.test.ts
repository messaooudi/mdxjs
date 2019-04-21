import COVARIANCE from "../COVARIANCE";

test('COVARIANCE reserved word', () => {
  expect('COVARIANCE').toMatch(COVARIANCE.pattern as RegExp);
  expect('something else').not.toMatch(COVARIANCE.pattern as RegExp);
});