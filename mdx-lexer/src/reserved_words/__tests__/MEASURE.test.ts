import MEASURE from "../MEASURE";

test('MEASURE reserved word', () => {
  expect('MEASURE').toMatch(MEASURE.pattern as RegExp);
  expect('something else').not.toMatch(MEASURE.pattern as RegExp);
});