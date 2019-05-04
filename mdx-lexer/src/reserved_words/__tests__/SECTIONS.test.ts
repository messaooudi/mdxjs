import SECTIONS from "../SECTIONS";

test('SECTIONS reserved word', () => {
  expect('SECTIONS').toMatch(SECTIONS.PATTERN as RegExp);
  expect('something else').not.toMatch(SECTIONS.PATTERN as RegExp);
});