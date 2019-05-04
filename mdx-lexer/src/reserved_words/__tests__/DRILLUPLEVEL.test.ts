import DRILLUPLEVEL from "../DRILLUPLEVEL";

test('DRILLUPLEVEL reserved word', () => {
  expect('DRILLUPLEVEL').toMatch(DRILLUPLEVEL.PATTERN as RegExp);
  expect('something else').not.toMatch(DRILLUPLEVEL.PATTERN as RegExp);
});