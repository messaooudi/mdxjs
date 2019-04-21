import NEXTMEMBER from "../NEXTMEMBER";

test('NEXTMEMBER reserved word', () => {
  expect('NEXTMEMBER').toMatch(NEXTMEMBER.pattern as RegExp);
  expect('something else').not.toMatch(NEXTMEMBER.pattern as RegExp);
});