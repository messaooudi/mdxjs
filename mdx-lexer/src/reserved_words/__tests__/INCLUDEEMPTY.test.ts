import INCLUDEEMPTY from "../INCLUDEEMPTY";

test('INCLUDEEMPTY reserved word', () => {
  expect('INCLUDEEMPTY').toMatch(INCLUDEEMPTY.PATTERN as RegExp);
  expect('something else').not.toMatch(INCLUDEEMPTY.PATTERN as RegExp);
});