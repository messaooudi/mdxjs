import CHILDREN from "../CHILDREN";

test('CHILDREN reserved word', () => {
  expect('CHILDREN').toMatch(CHILDREN.pattern as RegExp);
  expect('something else').not.toMatch(CHILDREN.pattern as RegExp);
});