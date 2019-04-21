import SECTIONS from "../SECTIONS";

test('SECTIONS reserved word', () => {
  expect('SECTIONS').toMatch(SECTIONS.pattern as RegExp);
  expect('something else').not.toMatch(SECTIONS.pattern as RegExp);
});