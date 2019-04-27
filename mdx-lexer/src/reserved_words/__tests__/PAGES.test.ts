import PAGES from "../PAGES";

test('PAGES reserved word', () => {
  expect('PAGES').toMatch(PAGES.PATTERN as RegExp);
  expect('something else').not.toMatch(PAGES.PATTERN as RegExp);
});