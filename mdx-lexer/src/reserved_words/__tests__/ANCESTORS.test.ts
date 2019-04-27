import ANCESTORS from "../ANCESTORS";

test('ANCESTORS reserved word', () => {
  expect('ANCESTORS').toMatch(ANCESTORS.PATTERN as RegExp);
  expect('something else').not.toMatch(ANCESTORS.PATTERN as RegExp);
});