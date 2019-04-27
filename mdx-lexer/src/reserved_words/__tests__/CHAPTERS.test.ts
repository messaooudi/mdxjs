import CHAPTERS from "../CHAPTERS";

test('CHAPTERS reserved word', () => {
  expect('CHAPTERS').toMatch(CHAPTERS.PATTERN as RegExp);
  expect('something else').not.toMatch(CHAPTERS.PATTERN as RegExp);
});