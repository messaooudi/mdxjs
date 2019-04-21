import LESS_THAN from "../LESS_THAN";

test('LESS_THAN comparison operator', () => {
  expect('<').toMatch(LESS_THAN.pattern as RegExp);
  expect('something else').not.toMatch(LESS_THAN.pattern as RegExp);
});