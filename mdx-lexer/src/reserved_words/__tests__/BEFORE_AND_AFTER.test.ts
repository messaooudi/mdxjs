import BEFORE_AND_AFTER from "../BEFORE_AND_AFTER";

test('BEFORE_AND_AFTER reserved word', () => {
  expect('BEFORE_AND_AFTER').toMatch(BEFORE_AND_AFTER.pattern as RegExp);
  expect('something else').not.toMatch(BEFORE_AND_AFTER.pattern as RegExp);
});