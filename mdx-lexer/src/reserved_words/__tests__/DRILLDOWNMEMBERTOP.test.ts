import DRILLDOWNMEMBERTOP from "../DRILLDOWNMEMBERTOP";

test('DRILLDOWNMEMBERTOP reserved word', () => {
  expect('DRILLDOWNMEMBERTOP').toMatch(DRILLDOWNMEMBERTOP.PATTERN as RegExp);
  expect('something else').not.toMatch(DRILLDOWNMEMBERTOP.PATTERN as RegExp);
});