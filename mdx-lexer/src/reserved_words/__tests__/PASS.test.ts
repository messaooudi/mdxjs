import PASS from "../PASS";

test('PASS reserved word', () => {
  expect('PASS').toMatch(PASS.PATTERN as RegExp);
  expect('something else').not.toMatch(PASS.PATTERN as RegExp);
});