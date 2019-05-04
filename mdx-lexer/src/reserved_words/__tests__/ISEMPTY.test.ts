import ISEMPTY from "../ISEMPTY";

test('ISEMPTY reserved word', () => {
  expect('ISEMPTY').toMatch(ISEMPTY.PATTERN as RegExp);
  expect('something else').not.toMatch(ISEMPTY.PATTERN as RegExp);
});