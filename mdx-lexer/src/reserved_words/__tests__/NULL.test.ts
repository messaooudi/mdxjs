import NULL from "../NULL";

test('NULL reserved word', () => {
  expect('NULL').toMatch(NULL.pattern as RegExp);
  expect('something else').not.toMatch(NULL.pattern as RegExp);
});