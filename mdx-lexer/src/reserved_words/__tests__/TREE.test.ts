import TREE from "../TREE";

test('TREE reserved word', () => {
  expect('TREE').toMatch(TREE.pattern as RegExp);
  expect('something else').not.toMatch(TREE.pattern as RegExp);
});