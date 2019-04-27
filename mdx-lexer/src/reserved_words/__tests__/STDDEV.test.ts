import STDDEV from "../STDDEV";

test('STDDEV reserved word', () => {
  expect('STDDEV').toMatch(STDDEV.PATTERN as RegExp);
  expect('something else').not.toMatch(STDDEV.PATTERN as RegExp);
});