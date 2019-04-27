import DEFAULTMEMBER from "../DEFAULTMEMBER";

test('DEFAULTMEMBER reserved word', () => {
  expect('DEFAULTMEMBER').toMatch(DEFAULTMEMBER.PATTERN as RegExp);
  expect('something else').not.toMatch(DEFAULTMEMBER.PATTERN as RegExp);
});