import SELF_BEFORE_AFTER from "../SELF_BEFORE_AFTER";

test('SELF_BEFORE_AFTER reserved word', () => {
  expect('SELF_BEFORE_AFTER').toMatch(SELF_BEFORE_AFTER.pattern as RegExp);
  expect('something else').not.toMatch(SELF_BEFORE_AFTER.pattern as RegExp);
});