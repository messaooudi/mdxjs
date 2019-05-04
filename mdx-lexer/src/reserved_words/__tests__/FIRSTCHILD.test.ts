import FIRSTCHILD from "../FIRSTCHILD";

test('FIRSTCHILD reserved word', () => {
  expect('FIRSTCHILD').toMatch(FIRSTCHILD.PATTERN as RegExp);
  expect('something else').not.toMatch(FIRSTCHILD.PATTERN as RegExp);
});