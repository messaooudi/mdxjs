import XOR from "../XOR";

test('XOR bitwise operator', () => {
  expect('XOR').toMatch(XOR.pattern as RegExp);
  expect('something else').not.toMatch(XOR.pattern as RegExp);
});