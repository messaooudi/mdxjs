import AFTER from "../AFTER";

test('AFTER reserved word', () => {
  expect('AFTER').toMatch(AFTER.PATTERN as RegExp);
  expect('something else').not.toMatch(AFTER.PATTERN as RegExp);
});