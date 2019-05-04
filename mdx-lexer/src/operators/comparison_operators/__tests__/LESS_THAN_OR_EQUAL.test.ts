import LESS_THAN_OR_EQUAL from "../LESS_THAN_OR_EQUAL";

test('LESS_THAN_OR_EQUAL comparison operator', () => {
  expect('<=').toMatch(LESS_THAN_OR_EQUAL.PATTERN as RegExp);
  expect('something else').not.toMatch(LESS_THAN_OR_EQUAL.PATTERN as RegExp);
});