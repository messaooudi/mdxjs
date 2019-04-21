import GROUP from "../GROUP";

test('GROUP reserved word', () => {
  expect('GROUP').toMatch(GROUP.pattern as RegExp);
  expect('something else').not.toMatch(GROUP.pattern as RegExp);
});