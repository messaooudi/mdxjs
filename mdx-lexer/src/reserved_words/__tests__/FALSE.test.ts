import FALSE from "../FALSE";

test('FALSE reserved word', () => {
  expect('FALSE').toMatch(FALSE.pattern as RegExp);
  expect('something else').not.toMatch(FALSE.pattern as RegExp);
});