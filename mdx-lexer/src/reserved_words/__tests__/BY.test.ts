import BY from "../BY";

test('BY reserved word', () => {
  expect('BY').toMatch(BY.pattern as RegExp);
  expect('something else').not.toMatch(BY.pattern as RegExp);
});