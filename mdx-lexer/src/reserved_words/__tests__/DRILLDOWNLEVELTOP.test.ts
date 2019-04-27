import DRILLDOWNLEVELTOP from "../DRILLDOWNLEVELTOP";

test('DRILLDOWNLEVELTOP reserved word', () => {
  expect('DRILLDOWNLEVELTOP').toMatch(DRILLDOWNLEVELTOP.PATTERN as RegExp);
  expect('something else').not.toMatch(DRILLDOWNLEVELTOP.PATTERN as RegExp);
});