import ISLEAF from "../ISLEAF";

test('ISLEAF reserved word', () => {
  expect('ISLEAF').toMatch(ISLEAF.PATTERN as RegExp);
  expect('something else').not.toMatch(ISLEAF.PATTERN as RegExp);
});