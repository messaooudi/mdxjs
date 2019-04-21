import CELL from "../CELL";

test('CELL reserved word', () => {
  expect('CELL').toMatch(CELL.pattern as RegExp);
  expect('something else').not.toMatch(CELL.pattern as RegExp);
});