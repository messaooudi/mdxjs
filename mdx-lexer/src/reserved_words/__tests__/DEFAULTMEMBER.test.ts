import DEFAULTMEMBER from "../DEFAULTMEMBER";

test('DEFAULTMEMBER reserved word', () => {
  expect('DEFAULTMEMBER').toMatch(DEFAULTMEMBER.pattern as RegExp);
  expect('something else').not.toMatch(DEFAULTMEMBER.pattern as RegExp);
});