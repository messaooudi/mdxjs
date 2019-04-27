import ACTIONPARAMETERSET from "../ACTIONPARAMETERSET";

test('ACTIONPARAMETERSET reserved word', () => {
  expect('ACTIONPARAMETERSET').toMatch(ACTIONPARAMETERSET.PATTERN as RegExp);
  expect('something else').not.toMatch(ACTIONPARAMETERSET.PATTERN as RegExp);
});