import STORAGE from "../STORAGE";

test('STORAGE reserved word', () => {
  expect('STORAGE').toMatch(STORAGE.pattern as RegExp);
  expect('something else').not.toMatch(STORAGE.pattern as RegExp);
});