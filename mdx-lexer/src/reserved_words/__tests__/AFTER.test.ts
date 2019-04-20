import AFTER from "../AFTER";

test('AFTER reserved word', () => {
  expect('AFTER').toMatch(AFTER.pattern as RegExp);
  expect('something else').not.toMatch(AFTER.pattern as RegExp);
});