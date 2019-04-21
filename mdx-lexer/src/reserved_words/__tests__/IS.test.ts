import IS from "../IS";

test('IS reserved word', () => {
  expect('IS').toMatch(IS.pattern as RegExp);
  expect('something else').not.toMatch(IS.pattern as RegExp);
});