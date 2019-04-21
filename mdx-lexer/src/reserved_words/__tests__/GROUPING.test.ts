import GROUPING from "../GROUPING";

test('GROUPING reserved word', () => {
  expect('GROUPING').toMatch(GROUPING.pattern as RegExp);
  expect('something else').not.toMatch(GROUPING.pattern as RegExp);
});