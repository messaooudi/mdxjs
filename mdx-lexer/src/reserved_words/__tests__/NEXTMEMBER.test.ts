import NEXTMEMBER from "../NEXTMEMBER";

test('NEXTMEMBER reserved word', () => {
  expect('NEXTMEMBER').toMatch(NEXTMEMBER.PATTERN as RegExp);
  expect('something else').not.toMatch(NEXTMEMBER.PATTERN as RegExp);
});