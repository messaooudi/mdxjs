import UNION from "../UNION";

test('UNION reserved word', () => {
  expect('UNION').toMatch(UNION.pattern as RegExp);
  expect('something else').not.toMatch(UNION.pattern as RegExp);
});