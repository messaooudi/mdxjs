import LINKMEMBER from "../LINKMEMBER";

test('LINKMEMBER reserved word', () => {
  expect('LINKMEMBER').toMatch(LINKMEMBER.PATTERN as RegExp);
  expect('something else').not.toMatch(LINKMEMBER.PATTERN as RegExp);
});