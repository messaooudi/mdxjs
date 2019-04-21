import LINREGSLOPE from "../LINREGSLOPE";

test('LINREGSLOPE reserved word', () => {
  expect('LINREGSLOPE').toMatch(LINREGSLOPE.pattern as RegExp);
  expect('something else').not.toMatch(LINREGSLOPE.pattern as RegExp);
});