import MAX from "../MAX";

test('MAX reserved word', () => {
  expect('MAX').toMatch(MAX.pattern as RegExp);
  expect('something else').not.toMatch(MAX.pattern as RegExp);
});