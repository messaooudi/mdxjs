import HIERARCHY from "../HIERARCHY";

test('HIERARCHY reserved word', () => {
  expect('HIERARCHY').toMatch(HIERARCHY.PATTERN as RegExp);
  expect('something else').not.toMatch(HIERARCHY.PATTERN as RegExp);
});