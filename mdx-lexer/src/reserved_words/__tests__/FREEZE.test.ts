import FREEZE from "../FREEZE";

test('FREEZE reserved word', () => {
  expect('FREEZE').toMatch(FREEZE.pattern as RegExp);
  expect('something else').not.toMatch(FREEZE.pattern as RegExp);
});