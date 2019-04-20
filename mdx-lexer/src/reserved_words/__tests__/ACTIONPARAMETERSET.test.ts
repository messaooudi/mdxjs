import ACTIONPARAMETERSET from "../ACTIONPARAMETERSET";

test('ACTIONPARAMETERSET reserved word', () => {
  expect('ACTIONPARAMETERSET').toMatch(ACTIONPARAMETERSET.pattern as RegExp);
  expect('something else').not.toMatch(ACTIONPARAMETERSET.pattern as RegExp);
});