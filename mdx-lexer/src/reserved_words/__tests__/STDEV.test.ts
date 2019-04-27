import STDEV from "../STDEV";

test('STDEV reserved word', () => {
  expect('STDEV').toMatch(STDEV.PATTERN as RegExp);
  expect('something else').not.toMatch(STDEV.PATTERN as RegExp);
});