import VAR from "../VAR";

test('VAR reserved word', () => {
  expect('VAR').toMatch(VAR.pattern as RegExp);
  expect('something else').not.toMatch(VAR.pattern as RegExp);
});