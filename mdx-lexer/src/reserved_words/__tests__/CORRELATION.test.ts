import CORRELATION from "../CORRELATION";

test('CORRELATION reserved word', () => {
  expect('CORRELATION').toMatch(CORRELATION.PATTERN as RegExp);
  expect('something else').not.toMatch(CORRELATION.PATTERN as RegExp);
});