import PREVMEMBER from "../PREVMEMBER";

test('PREVMEMBER reserved word', () => {
  expect('PREVMEMBER').toMatch(PREVMEMBER.pattern as RegExp);
  expect('something else').not.toMatch(PREVMEMBER.pattern as RegExp);
});