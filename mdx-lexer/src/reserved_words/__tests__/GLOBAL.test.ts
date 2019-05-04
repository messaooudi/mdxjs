import GLOBAL from "../GLOBAL";

test('GLOBAL reserved word', () => {
  expect('GLOBAL').toMatch(GLOBAL.PATTERN as RegExp);
  expect('something else').not.toMatch(GLOBAL.PATTERN as RegExp);
});