import ISEMPTY from "../ISEMPTY";

test('ISEMPTY reserved word', () => {
  expect('ISEMPTY').toMatch(ISEMPTY.pattern as RegExp);
  expect('something else').not.toMatch(ISEMPTY.pattern as RegExp);
});