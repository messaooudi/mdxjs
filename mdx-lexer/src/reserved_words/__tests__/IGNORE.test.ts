import IGNORE from "../IGNORE";

test('IGNORE reserved word', () => {
  expect('IGNORE').toMatch(IGNORE.PATTERN as RegExp);
  expect('something else').not.toMatch(IGNORE.PATTERN as RegExp);
});