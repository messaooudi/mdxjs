import DRILLDOWNLEVELTOP from "../DRILLDOWNLEVELTOP";

test('DRILLDOWNLEVELTOP reserved word', () => {
  expect('DRILLDOWNLEVELTOP').toMatch(DRILLDOWNLEVELTOP.pattern as RegExp);
  expect('something else').not.toMatch(DRILLDOWNLEVELTOP.pattern as RegExp);
});