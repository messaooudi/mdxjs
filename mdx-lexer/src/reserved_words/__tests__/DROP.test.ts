import DROP from "../DROP";

test('DROP reserved word', () => {
  expect('DROP').toMatch(DROP.pattern as RegExp);
  expect('something else').not.toMatch(DROP.pattern as RegExp);
});