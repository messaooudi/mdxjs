import CELLFORMULASETLIST from "../CELLFORMULASETLIST";

test('CELLFORMULASETLIST reserved word', () => {
  expect('CELLFORMULASETLIST').toMatch(CELLFORMULASETLIST.PATTERN as RegExp);
  expect('something else').not.toMatch(CELLFORMULASETLIST.PATTERN as RegExp);
});