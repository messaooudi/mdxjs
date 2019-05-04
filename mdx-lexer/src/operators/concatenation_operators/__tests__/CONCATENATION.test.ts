import CONCATENATION from "../CONCATENATION";

test('CONCATENATION operator', () => {
  expect('+').toMatch(CONCATENATION.PATTERN as RegExp);
  expect('something else').not.toMatch(CONCATENATION.PATTERN as RegExp);
});