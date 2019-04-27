import TREE from "../TREE";

test('TREE reserved word', () => {
  expect('TREE').toMatch(TREE.PATTERN as RegExp);
  expect('something else').not.toMatch(TREE.PATTERN as RegExp);
});