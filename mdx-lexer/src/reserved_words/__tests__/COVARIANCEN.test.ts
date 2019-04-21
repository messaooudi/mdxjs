import COVARIANCEN from "../COVARIANCEN";

test('COVARIANCEN reserved word', () => {
  expect('COVARIANCEN').toMatch(COVARIANCEN.pattern as RegExp);
  expect('something else').not.toMatch(COVARIANCEN.pattern as RegExp);
});