import FIRSTCHILD from "../FIRSTCHILD";

test('FIRSTCHILD reserved word', () => {
  expect('FIRSTCHILD').toMatch(FIRSTCHILD.pattern as RegExp);
  expect('something else').not.toMatch(FIRSTCHILD.pattern as RegExp);
});