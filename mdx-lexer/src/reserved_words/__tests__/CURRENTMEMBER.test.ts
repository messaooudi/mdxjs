import CURRENTMEMBER from "../CURRENTMEMBER";

test('CURRENTMEMBER reserved word', () => {
  expect('CURRENTMEMBER').toMatch(CURRENTMEMBER.pattern as RegExp);
  expect('something else').not.toMatch(CURRENTMEMBER.pattern as RegExp);
});