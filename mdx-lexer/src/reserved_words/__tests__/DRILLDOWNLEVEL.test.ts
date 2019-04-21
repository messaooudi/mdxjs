import DRILLDOWNLEVEL from "../DRILLDOWNLEVEL";

test('DRILLDOWNLEVEL reserved word', () => {
  expect('DRILLDOWNLEVEL').toMatch(DRILLDOWNLEVEL.pattern as RegExp);
  expect('something else').not.toMatch(DRILLDOWNLEVEL.pattern as RegExp);
});