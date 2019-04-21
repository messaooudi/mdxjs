import DESC from "../DESC";

test('DESC reserved word', () => {
  expect('DESC').toMatch(DESC.pattern as RegExp);
  expect('something else').not.toMatch(DESC.pattern as RegExp);
});