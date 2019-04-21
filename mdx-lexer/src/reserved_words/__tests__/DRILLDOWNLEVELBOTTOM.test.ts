import DRILLDOWNLEVELBOTTOM from "../DRILLDOWNLEVELBOTTOM";

test('DRILLDOWNLEVELBOTTOM reserved word', () => {
  expect('DRILLDOWNLEVELBOTTOM').toMatch(DRILLDOWNLEVELBOTTOM.pattern as RegExp);
  expect('something else').not.toMatch(DRILLDOWNLEVELBOTTOM.pattern as RegExp);
});