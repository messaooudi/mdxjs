import LINREGSLOPE from "../LINREGSLOPE";

test('LINREGSLOPE reserved word', () => {
  expect('LINREGSLOPE').toMatch(LINREGSLOPE.PATTERN as RegExp);
  expect('something else').not.toMatch(LINREGSLOPE.PATTERN as RegExp);
});