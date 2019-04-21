import CELLFORMULASETLIST from "../CELLFORMULASETLIST";

test('CELLFORMULASETLIST reserved word', () => {
  expect('CELLFORMULASETLIST').toMatch(CELLFORMULASETLIST.pattern as RegExp);
  expect('something else').not.toMatch(CELLFORMULASETLIST.pattern as RegExp);
});