import MAX from "../MAX";

test('MAX reserved word', () => {
  expect('MAX').toMatch(MAX.PATTERN as RegExp);
  expect('something else').not.toMatch(MAX.PATTERN as RegExp);
});