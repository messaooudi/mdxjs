import INCLUDEEMPTY from "../INCLUDEEMPTY";

test('INCLUDEEMPTY reserved word', () => {
  expect('INCLUDEEMPTY').toMatch(INCLUDEEMPTY.pattern as RegExp);
  expect('something else').not.toMatch(INCLUDEEMPTY.pattern as RegExp);
});