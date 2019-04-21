import HIERARCHY from "../HIERARCHY";

test('HIERARCHY reserved word', () => {
  expect('HIERARCHY').toMatch(HIERARCHY.pattern as RegExp);
  expect('something else').not.toMatch(HIERARCHY.pattern as RegExp);
});