import EXCLUDEEMPTY from "../EXCLUDEEMPTY";

test('EXCLUDEEMPTY reserved word', () => {
  expect('EXCLUDEEMPTY').toMatch(EXCLUDEEMPTY.PATTERN as RegExp);
  expect('something else').not.toMatch(EXCLUDEEMPTY.PATTERN as RegExp);
});