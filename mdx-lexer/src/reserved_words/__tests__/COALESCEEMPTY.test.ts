import COALESCEEMPTY from "../COALESCEEMPTY";

test('COALESCEEMPTY reserved word', () => {
  expect('COALESCEEMPTY').toMatch(COALESCEEMPTY.PATTERN as RegExp);
  expect('something else').not.toMatch(COALESCEEMPTY.PATTERN as RegExp);
});