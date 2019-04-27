import ROWS from "../ROWS";

test('ROWS reserved word', () => {
  expect('ROWS').toMatch(ROWS.PATTERN as RegExp);
  expect('something else').not.toMatch(ROWS.PATTERN as RegExp);
});