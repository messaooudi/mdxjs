import ISLEAF from "../ISLEAF";

test('ISLEAF reserved word', () => {
  expect('ISLEAF').toMatch(ISLEAF.pattern as RegExp);
  expect('something else').not.toMatch(ISLEAF.pattern as RegExp);
});