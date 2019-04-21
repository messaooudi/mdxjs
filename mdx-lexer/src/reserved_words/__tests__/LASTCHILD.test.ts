import LASTCHILD from "../LASTCHILD";

test('LASTCHILD reserved word', () => {
  expect('LASTCHILD').toMatch(LASTCHILD.pattern as RegExp);
  expect('something else').not.toMatch(LASTCHILD.pattern as RegExp);
});