import SELF_AND_AFTER from "../SELF_AND_AFTER";

test('SELF_AND_AFTER reserved word', () => {
  expect('SELF_AND_AFTER').toMatch(SELF_AND_AFTER.pattern as RegExp);
  expect('something else').not.toMatch(SELF_AND_AFTER.pattern as RegExp);
});