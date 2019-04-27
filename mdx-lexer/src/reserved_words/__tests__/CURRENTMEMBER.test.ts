import CURRENTMEMBER from "../CURRENTMEMBER";

test('CURRENTMEMBER reserved word', () => {
  expect('CURRENTMEMBER').toMatch(CURRENTMEMBER.PATTERN as RegExp);
  expect('something else').not.toMatch(CURRENTMEMBER.PATTERN as RegExp);
});