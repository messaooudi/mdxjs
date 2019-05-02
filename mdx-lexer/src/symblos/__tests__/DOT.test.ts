import DOT from "../DOT";

test('DOT symbol', () => {
  expect(".").toMatch(DOT.PATTERN as RegExp);
  expect('something else').not.toMatch(DOT.PATTERN as RegExp);
});