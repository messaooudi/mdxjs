import DROP from "../DROP";

test('DROP reserved word', () => {
  expect('DROP').toMatch(DROP.PATTERN as RegExp);
  expect('something else').not.toMatch(DROP.PATTERN as RegExp);
});