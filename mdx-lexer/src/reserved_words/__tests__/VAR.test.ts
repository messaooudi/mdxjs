import VAR from "../VAR";

test('VAR reserved word', () => {
  expect('VAR').toMatch(VAR.PATTERN as RegExp);
  expect('something else').not.toMatch(VAR.PATTERN as RegExp);
});