import CHAPTERS from "../CHAPTERS";

test('CHAPTERS reserved word', () => {
  expect('CHAPTERS').toMatch(CHAPTERS.pattern as RegExp);
  expect('something else').not.toMatch(CHAPTERS.pattern as RegExp);
});