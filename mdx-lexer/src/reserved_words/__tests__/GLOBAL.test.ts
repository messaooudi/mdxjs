import GLOBAL from "../GLOBAL";

test('GLOBAL reserved word', () => {
  expect('GLOBAL').toMatch(GLOBAL.pattern as RegExp);
  expect('something else').not.toMatch(GLOBAL.pattern as RegExp);
});