import IGNORE from "../IGNORE";

test('IGNORE reserved word', () => {
  expect('IGNORE').toMatch(IGNORE.pattern as RegExp);
  expect('something else').not.toMatch(IGNORE.pattern as RegExp);
});