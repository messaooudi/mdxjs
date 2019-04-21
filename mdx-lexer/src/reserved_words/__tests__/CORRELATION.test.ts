import CORRELATION from "../CORRELATION";

test('CORRELATION reserved word', () => {
  expect('CORRELATION').toMatch(CORRELATION.pattern as RegExp);
  expect('something else').not.toMatch(CORRELATION.pattern as RegExp);
});