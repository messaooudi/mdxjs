import COALESCEEMPTY from "../COALESCEEMPTY";

test('COALESCEEMPTY reserved word', () => {
  expect('COALESCEEMPTY').toMatch(COALESCEEMPTY.pattern as RegExp);
  expect('something else').not.toMatch(COALESCEEMPTY.pattern as RegExp);
});