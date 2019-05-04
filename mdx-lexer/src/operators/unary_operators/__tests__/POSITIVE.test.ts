import POSITIVE from "../POSITIVE";

test('POSITIVE unary operator', () => {
  expect('+').toMatch(POSITIVE.PATTERN as RegExp);
  expect('something else').not.toMatch(POSITIVE.PATTERN as RegExp);
});