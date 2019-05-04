import RELATIVE from "../RELATIVE";

test('RELATIVE reserved word', () => {
  expect('RELATIVE').toMatch(RELATIVE.PATTERN as RegExp);
  expect('something else').not.toMatch(RELATIVE.PATTERN as RegExp);
});