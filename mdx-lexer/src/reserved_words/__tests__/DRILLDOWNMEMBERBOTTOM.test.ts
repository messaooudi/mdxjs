import DRILLDOWNMEMBERBOTTOM from "../DRILLDOWNMEMBERBOTTOM";

test('DRILLDOWNMEMBERBOTTOM reserved word', () => {
  expect('DRILLDOWNMEMBERBOTTOM').toMatch(DRILLDOWNMEMBERBOTTOM.PATTERN as RegExp);
  expect('something else').not.toMatch(DRILLDOWNMEMBERBOTTOM.PATTERN as RegExp);
});