import GROUPING from "../GROUPING";

test('GROUPING reserved word', () => {
  expect('GROUPING').toMatch(GROUPING.PATTERN as RegExp);
  expect('something else').not.toMatch(GROUPING.PATTERN as RegExp);
});