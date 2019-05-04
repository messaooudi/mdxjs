import DEFAULT_MEMBER from "../DEFAULT_MEMBER";

test('DEFAULT_MEMBER reserved word', () => {
  expect('DEFAULT_MEMBER').toMatch(DEFAULT_MEMBER.PATTERN as RegExp);
  expect('something else').not.toMatch(DEFAULT_MEMBER.PATTERN as RegExp);
});