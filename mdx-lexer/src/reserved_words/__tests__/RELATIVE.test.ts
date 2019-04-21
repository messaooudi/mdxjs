import RELATIVE from "../RELATIVE";

test('RELATIVE reserved word', () => {
  expect('RELATIVE').toMatch(RELATIVE.pattern as RegExp);
  expect('something else').not.toMatch(RELATIVE.pattern as RegExp);
});