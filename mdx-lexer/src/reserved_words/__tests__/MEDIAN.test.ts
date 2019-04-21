import MEDIAN from "../MEDIAN";

test('MEDIAN reserved word', () => {
  expect('MEDIAN').toMatch(MEDIAN.pattern as RegExp);
  expect('something else').not.toMatch(MEDIAN.pattern as RegExp);
});