import MEDIAN from "../MEDIAN";

test('MEDIAN reserved word', () => {
  expect('MEDIAN').toMatch(MEDIAN.PATTERN as RegExp);
  expect('something else').not.toMatch(MEDIAN.PATTERN as RegExp);
});