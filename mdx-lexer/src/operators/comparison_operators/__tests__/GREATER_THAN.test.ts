import GREATER_THAN from "../GREATER_THAN";

test('GREATER_THAN comparison operator', () => {
  expect('>').toMatch(GREATER_THAN.pattern as RegExp);
  expect('something else').not.toMatch(GREATER_THAN.pattern as RegExp);
});