import ANCESTORS from "../ANCESTORS";

test('ANCESTORS reserved word', () => {
  expect('ANCESTORS').toMatch(ANCESTORS.pattern as RegExp);
  expect('something else').not.toMatch(ANCESTORS.pattern as RegExp);
});