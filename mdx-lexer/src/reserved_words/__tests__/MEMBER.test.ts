import MEMBER from "../MEMBER";

test('MEMBER reserved word', () => {
  expect('MEMBER').toMatch(MEMBER.pattern as RegExp);
  expect('something else').not.toMatch(MEMBER.pattern as RegExp);
});