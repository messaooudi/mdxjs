import COVARIANCEN from "../COVARIANCEN";

test('COVARIANCEN reserved word', () => {
  expect('COVARIANCEN').toMatch(COVARIANCEN.PATTERN as RegExp);
  expect('something else').not.toMatch(COVARIANCEN.PATTERN as RegExp);
});