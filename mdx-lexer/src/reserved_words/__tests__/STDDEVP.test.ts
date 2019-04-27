import STDDEVP from "../STDDEVP";

test('STDDEVP reserved word', () => {
  expect('STDDEVP').toMatch(STDDEVP.PATTERN as RegExp);
  expect('something else').not.toMatch(STDDEVP.PATTERN as RegExp);
});