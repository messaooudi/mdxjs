import DRILLUPLEVEL from "../DRILLUPLEVEL";

test('DRILLUPLEVEL reserved word', () => {
  expect('DRILLUPLEVEL').toMatch(DRILLUPLEVEL.pattern as RegExp);
  expect('something else').not.toMatch(DRILLUPLEVEL.pattern as RegExp);
});