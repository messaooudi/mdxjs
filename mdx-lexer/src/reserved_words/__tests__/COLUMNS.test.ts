import COLUMNS from "../COLUMNS";

test('COLUMNS reserved word', () => {
  expect('COLUMNS').toMatch(COLUMNS.PATTERN as RegExp);
  expect('something else').not.toMatch(COLUMNS.PATTERN as RegExp);
});