import STORAGE from "../STORAGE";

test('STORAGE reserved word', () => {
  expect('STORAGE').toMatch(STORAGE.PATTERN as RegExp);
  expect('something else').not.toMatch(STORAGE.PATTERN as RegExp);
});