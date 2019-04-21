import DRILLDOWNMEMBERTOP from "../DRILLDOWNMEMBERTOP";

test('DRILLDOWNMEMBERTOP reserved word', () => {
  expect('DRILLDOWNMEMBERTOP').toMatch(DRILLDOWNMEMBERTOP.pattern as RegExp);
  expect('something else').not.toMatch(DRILLDOWNMEMBERTOP.pattern as RegExp);
});