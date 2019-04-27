import XOR from "../XOR";

test('XOR reserved word', () => {
  expect('XOR').toMatch(XOR.PATTERN as RegExp);
  expect('something else').not.toMatch(XOR.PATTERN as RegExp);
});