import POWER from "../POWER";

test('POWER arithmetic operator', () => {
  expect('^').toMatch(POWER.pattern as RegExp);
  expect('something else').not.toMatch(POWER.pattern as RegExp);
});