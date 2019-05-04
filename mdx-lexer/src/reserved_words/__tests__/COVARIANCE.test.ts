import COVARIANCE from "../COVARIANCE";

test('COVARIANCE reserved word', () => {
  expect('COVARIANCE').toMatch(COVARIANCE.PATTERN as RegExp);
  expect('something else').not.toMatch(COVARIANCE.PATTERN as RegExp);
});