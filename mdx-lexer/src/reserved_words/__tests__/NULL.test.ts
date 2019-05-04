import NULL from "../NULL";

test('NULL reserved word', () => {
  expect('NULL').toMatch(NULL.PATTERN as RegExp);
  expect('something else').not.toMatch(NULL.PATTERN as RegExp);
});