import CACHE from "../CACHE";

test('CACHE reserved word', () => {
  expect('CACHE').toMatch(CACHE.pattern as RegExp);
  expect('something else').not.toMatch(CACHE.pattern as RegExp);
});