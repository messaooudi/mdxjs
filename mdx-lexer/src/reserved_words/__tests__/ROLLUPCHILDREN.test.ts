import ROLLUPCHILDREN from "../ROLLUPCHILDREN";

test('ROLLUPCHILDREN reserved word', () => {
  expect('ROLLUPCHILDREN').toMatch(ROLLUPCHILDREN.PATTERN as RegExp);
  expect('something else').not.toMatch(ROLLUPCHILDREN.PATTERN as RegExp);
});