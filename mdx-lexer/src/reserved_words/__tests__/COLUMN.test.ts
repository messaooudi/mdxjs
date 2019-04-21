import COLUMN from "../COLUMN";

test('COLUMN reserved word', () => {
  expect('COLUMN').toMatch(COLUMN.pattern as RegExp);
  expect('something else').not.toMatch(COLUMN.pattern as RegExp);
});