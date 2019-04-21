import PARALLELPERIOD from "../PARALLELPERIOD";

test('PARALLELPERIOD reserved word', () => {
  expect('PARALLELPERIOD').toMatch(PARALLELPERIOD.pattern as RegExp);
  expect('something else').not.toMatch(PARALLELPERIOD.pattern as RegExp);
});