import POWER from "../POWER";

test('POWER arithmetic operator', () => {
  expect('^').toMatch(POWER.PATTERN as RegExp);
  expect('something else').not.toMatch(POWER.PATTERN as RegExp);
});