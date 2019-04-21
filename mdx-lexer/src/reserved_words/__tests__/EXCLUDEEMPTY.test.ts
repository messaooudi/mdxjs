import EXCLUDEEMPTY from "../EXCLUDEEMPTY";

test('EXCLUDEEMPTY reserved word', () => {
  expect('EXCLUDEEMPTY').toMatch(EXCLUDEEMPTY.pattern as RegExp);
  expect('something else').not.toMatch(EXCLUDEEMPTY.pattern as RegExp);
});