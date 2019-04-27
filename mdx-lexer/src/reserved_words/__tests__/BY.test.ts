import BY from "../BY";

test('BY reserved word', () => {
  expect('BY').toMatch(BY.PATTERN as RegExp);
  expect('something else').not.toMatch(BY.PATTERN as RegExp);
});