import ASCENDANTS from "../ASCENDANTS";

test('ASCENDANTS reserved word', () => {
  expect('ASCENDANTS').toMatch(ASCENDANTS.PATTERN as RegExp);
  expect('something else').not.toMatch(ASCENDANTS.PATTERN as RegExp);
});