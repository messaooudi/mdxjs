import COLUMN from "../COLUMN";

test('COLUMN reserved word', () => {
  expect('COLUMN').toMatch(COLUMN.PATTERN as RegExp);
  expect('something else').not.toMatch(COLUMN.PATTERN as RegExp);
});