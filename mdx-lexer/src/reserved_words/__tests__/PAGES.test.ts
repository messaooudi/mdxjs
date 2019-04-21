import PAGES from "../PAGES";

test('PAGES reserved word', () => {
  expect('PAGES').toMatch(PAGES.pattern as RegExp);
  expect('something else').not.toMatch(PAGES.pattern as RegExp);
});