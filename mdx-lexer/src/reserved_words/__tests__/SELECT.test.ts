import SELECT from "../SELECT";

test('SELECT reserved word', () => {
  expect('SELECT').toMatch(SELECT.pattern as RegExp);
  expect('something else').not.toMatch(SELECT.pattern as RegExp);
});