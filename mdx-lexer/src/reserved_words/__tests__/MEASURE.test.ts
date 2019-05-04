import MEASURE from "../MEASURE";

test('MEASURE reserved word', () => {
  expect('MEASURE').toMatch(MEASURE.PATTERN as RegExp);
  expect('something else').not.toMatch(MEASURE.PATTERN as RegExp);
});