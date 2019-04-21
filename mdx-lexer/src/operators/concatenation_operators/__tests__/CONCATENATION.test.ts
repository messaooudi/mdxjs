import CONCATENATION from "../CONCATENATION";

test('CONCATENATION operator', () => {
  expect('+').toMatch(CONCATENATION.pattern as RegExp);
  expect('something else').not.toMatch(CONCATENATION.pattern as RegExp);
});