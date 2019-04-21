import ISANCESTOR from "../ISANCESTOR";

test('ISANCESTOR reserved word', () => {
  expect('ISANCESTOR').toMatch(ISANCESTOR.pattern as RegExp);
  expect('something else').not.toMatch(ISANCESTOR.pattern as RegExp);
});