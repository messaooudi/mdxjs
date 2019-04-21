import GREATER_THAN_OR_EQUAL from "../GREATER_THAN_OR_EQUAL";

test('GREATER_THAN_OR_EQUAL comparison operator', () => {
  expect('>=').toMatch(GREATER_THAN_OR_EQUAL.pattern as RegExp);
  expect('something else').not.toMatch(GREATER_THAN_OR_EQUAL.pattern as RegExp);
});