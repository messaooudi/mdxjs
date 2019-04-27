import ISANCESTOR from "../ISANCESTOR";

test('ISANCESTOR reserved word', () => {
  expect('ISANCESTOR').toMatch(ISANCESTOR.PATTERN as RegExp);
  expect('something else').not.toMatch(ISANCESTOR.PATTERN as RegExp);
});