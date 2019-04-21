import ROWS from "../ROWS";

test('ROWS reserved word', () => {
  expect('ROWS').toMatch(ROWS.pattern as RegExp);
  expect('something else').not.toMatch(ROWS.pattern as RegExp);
});