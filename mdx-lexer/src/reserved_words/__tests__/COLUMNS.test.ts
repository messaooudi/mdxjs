import COLUMNS from "../COLUMNS";

test('COLUMNS reserved word', () => {
  expect('COLUMNS').toMatch(COLUMNS.pattern as RegExp);
  expect('something else').not.toMatch(COLUMNS.pattern as RegExp);
});