import ROLLUPCHILDREN from "../ROLLUPCHILDREN";

test('ROLLUPCHILDREN reserved word', () => {
  expect('ROLLUPCHILDREN').toMatch(ROLLUPCHILDREN.pattern as RegExp);
  expect('something else').not.toMatch(ROLLUPCHILDREN.pattern as RegExp);
});