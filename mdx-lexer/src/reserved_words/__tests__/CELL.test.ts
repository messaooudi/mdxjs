import CELL from "../CELL";

test('CELL reserved word', () => {
  expect('CELL').toMatch(CELL.PATTERN as RegExp);
  expect('something else').not.toMatch(CELL.PATTERN as RegExp);
});