import DRILLDOWNLEVEL from "../DRILLDOWNLEVEL";

test('DRILLDOWNLEVEL reserved word', () => {
  expect('DRILLDOWNLEVEL').toMatch(DRILLDOWNLEVEL.PATTERN as RegExp);
  expect('something else').not.toMatch(DRILLDOWNLEVEL.PATTERN as RegExp);
});