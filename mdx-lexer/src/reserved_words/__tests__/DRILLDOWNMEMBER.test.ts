import DRILLDOWNMEMBER from "../DRILLDOWNMEMBER";

test('DRILLDOWNMEMBER reserved word', () => {
  expect('DRILLDOWNMEMBER').toMatch(DRILLDOWNMEMBER.pattern as RegExp);
  expect('something else').not.toMatch(DRILLDOWNMEMBER.pattern as RegExp);
});