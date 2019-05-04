import GROUP from "../GROUP";

test('GROUP reserved word', () => {
  expect('GROUP').toMatch(GROUP.PATTERN as RegExp);
  expect('something else').not.toMatch(GROUP.PATTERN as RegExp);
});