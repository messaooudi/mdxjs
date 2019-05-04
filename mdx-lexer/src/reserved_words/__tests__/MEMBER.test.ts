import MEMBER from "../MEMBER";

test('MEMBER reserved word', () => {
  expect('MEMBER').toMatch(MEMBER.PATTERN as RegExp);
  expect('something else').not.toMatch(MEMBER.PATTERN as RegExp);
});