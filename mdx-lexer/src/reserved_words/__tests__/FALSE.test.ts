import FALSE from "../FALSE";

test('FALSE reserved word', () => {
  expect('FALSE').toMatch(FALSE.PATTERN as RegExp);
  expect('something else').not.toMatch(FALSE.PATTERN as RegExp);
});