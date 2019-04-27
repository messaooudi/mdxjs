import UNION from "../UNION";

test('UNION reserved word', () => {
  expect('UNION').toMatch(UNION.PATTERN as RegExp);
  expect('something else').not.toMatch(UNION.PATTERN as RegExp);
});