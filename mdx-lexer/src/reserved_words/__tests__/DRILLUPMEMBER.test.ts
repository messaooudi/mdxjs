import DRILLUPMEMBER from "../DRILLUPMEMBER";

test('DRILLUPMEMBER reserved word', () => {
  expect('DRILLUPMEMBER').toMatch(DRILLUPMEMBER.PATTERN as RegExp);
  expect('something else').not.toMatch(DRILLUPMEMBER.PATTERN as RegExp);
});