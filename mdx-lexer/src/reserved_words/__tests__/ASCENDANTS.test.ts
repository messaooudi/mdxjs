import ASCENDANTS from "../ASCENDANTS";

test('ASCENDANTS reserved word', () => {
  expect('ASCENDANTS').toMatch(ASCENDANTS.pattern as RegExp);
  expect('something else').not.toMatch(ASCENDANTS.pattern as RegExp);
});