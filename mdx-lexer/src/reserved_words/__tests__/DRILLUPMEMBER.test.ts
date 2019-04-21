import DRILLUPMEMBER from "../DRILLUPMEMBER";

test('DRILLUPMEMBER reserved word', () => {
  expect('DRILLUPMEMBER').toMatch(DRILLUPMEMBER.pattern as RegExp);
  expect('something else').not.toMatch(DRILLUPMEMBER.pattern as RegExp);
});