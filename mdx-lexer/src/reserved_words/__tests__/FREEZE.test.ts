import FREEZE from "../FREEZE";

test('FREEZE reserved word', () => {
  expect('FREEZE').toMatch(FREEZE.PATTERN as RegExp);
  expect('something else').not.toMatch(FREEZE.PATTERN as RegExp);
});