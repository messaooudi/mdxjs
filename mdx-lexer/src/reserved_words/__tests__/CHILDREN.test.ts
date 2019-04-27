import CHILDREN from "../CHILDREN";

test('CHILDREN reserved word', () => {
  expect('CHILDREN').toMatch(CHILDREN.PATTERN as RegExp);
  expect('something else').not.toMatch(CHILDREN.PATTERN as RegExp);
});