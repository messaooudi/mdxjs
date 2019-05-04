import PREVMEMBER from "../PREVMEMBER";

test('PREVMEMBER reserved word', () => {
  expect('PREVMEMBER').toMatch(PREVMEMBER.PATTERN as RegExp);
  expect('something else').not.toMatch(PREVMEMBER.PATTERN as RegExp);
});