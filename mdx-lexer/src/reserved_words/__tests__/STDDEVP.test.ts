import STDDEVP from "../STDDEVP";

test('STDDEVP reserved word', () => {
  expect('STDDEVP').toMatch(STDDEVP.pattern as RegExp);
  expect('something else').not.toMatch(STDDEVP.pattern as RegExp);
});