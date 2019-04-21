import POSITIVE from "../POSITIVE";

test('POSITIVE unary operator', () => {
  expect('+').toMatch(POSITIVE.pattern as RegExp);
  expect('something else').not.toMatch(POSITIVE.pattern as RegExp);
});