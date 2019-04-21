import STDDEV from "../STDDEV";

test('STDDEV reserved word', () => {
  expect('STDDEV').toMatch(STDDEV.pattern as RegExp);
  expect('something else').not.toMatch(STDDEV.pattern as RegExp);
});