import SELECT from "../SELECT";

test('SELECT reserved word', () => {
  expect('SELECT').toMatch(SELECT.PATTERN as RegExp);
  expect('something else').not.toMatch(SELECT.PATTERN as RegExp);
});