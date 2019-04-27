import LASTCHILD from "../LASTCHILD";

test('LASTCHILD reserved word', () => {
  expect('LASTCHILD').toMatch(LASTCHILD.PATTERN as RegExp);
  expect('something else').not.toMatch(LASTCHILD.PATTERN as RegExp);
});