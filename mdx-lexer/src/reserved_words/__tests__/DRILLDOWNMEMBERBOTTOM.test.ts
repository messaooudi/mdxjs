import DRILLDOWNMEMBERBOTTOM from "../DRILLDOWNMEMBERBOTTOM";

test('DRILLDOWNMEMBERBOTTOM reserved word', () => {
  expect('DRILLDOWNMEMBERBOTTOM').toMatch(DRILLDOWNMEMBERBOTTOM.pattern as RegExp);
  expect('something else').not.toMatch(DRILLDOWNMEMBERBOTTOM.pattern as RegExp);
});