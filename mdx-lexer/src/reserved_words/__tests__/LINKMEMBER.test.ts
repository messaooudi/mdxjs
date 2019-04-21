import LINKMEMBER from "../LINKMEMBER";

test('LINKMEMBER reserved word', () => {
  expect('LINKMEMBER').toMatch(LINKMEMBER.pattern as RegExp);
  expect('something else').not.toMatch(LINKMEMBER.pattern as RegExp);
});