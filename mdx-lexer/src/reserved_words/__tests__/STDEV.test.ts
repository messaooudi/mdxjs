import STDEV from "../STDEV";

test('STDEV reserved word', () => {
  expect('STDEV').toMatch(STDEV.pattern as RegExp);
  expect('something else').not.toMatch(STDEV.pattern as RegExp);
});