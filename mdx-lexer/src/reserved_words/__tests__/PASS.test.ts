import PASS from "../PASS";

test('PASS reserved word', () => {
  expect('PASS').toMatch(PASS.pattern as RegExp);
  expect('something else').not.toMatch(PASS.pattern as RegExp);
});