import CACHE from "../CACHE";

test('CACHE reserved word', () => {
  expect('CACHE').toMatch(CACHE.PATTERN as RegExp);
  expect('something else').not.toMatch(CACHE.PATTERN as RegExp);
});