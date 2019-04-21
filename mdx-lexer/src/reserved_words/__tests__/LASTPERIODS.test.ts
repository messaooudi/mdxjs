import LASTPERIODS from "../LASTPERIODS";

test('LASTPERIODS reserved word', () => {
  expect('LASTPERIODS').toMatch(LASTPERIODS.pattern as RegExp);
  expect('something else').not.toMatch(LASTPERIODS.pattern as RegExp);
});