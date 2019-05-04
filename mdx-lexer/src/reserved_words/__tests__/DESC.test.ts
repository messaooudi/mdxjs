import DESC from "../DESC";

test('DESC reserved word', () => {
  expect('DESC').toMatch(DESC.PATTERN as RegExp);
  expect('something else').not.toMatch(DESC.PATTERN as RegExp);
});