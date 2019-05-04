import DRILLDOWNMEMBER from "../DRILLDOWNMEMBER";

test('DRILLDOWNMEMBER reserved word', () => {
  expect('DRILLDOWNMEMBER').toMatch(DRILLDOWNMEMBER.PATTERN as RegExp);
  expect('something else').not.toMatch(DRILLDOWNMEMBER.PATTERN as RegExp);
});