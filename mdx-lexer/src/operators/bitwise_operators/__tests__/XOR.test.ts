import XOR from "../XOR";

test('XOR bitwise operator', () => {
  expect('XOR').toMatch(XOR.PATTERN as RegExp);
  expect('something else').not.toMatch(XOR.PATTERN as RegExp);
});