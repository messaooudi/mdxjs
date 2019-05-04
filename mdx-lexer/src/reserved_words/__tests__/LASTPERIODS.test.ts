import LASTPERIODS from "../LASTPERIODS";

test('LASTPERIODS reserved word', () => {
  expect('LASTPERIODS').toMatch(LASTPERIODS.PATTERN as RegExp);
  expect('something else').not.toMatch(LASTPERIODS.PATTERN as RegExp);
});