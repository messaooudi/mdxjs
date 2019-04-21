import DEFAULT_MEMBER from "../DEFAULT_MEMBER";

test('DEFAULT_MEMBER reserved word', () => {
  expect('DEFAULT_MEMBER').toMatch(DEFAULT_MEMBER.pattern as RegExp);
  expect('something else').not.toMatch(DEFAULT_MEMBER.pattern as RegExp);
});