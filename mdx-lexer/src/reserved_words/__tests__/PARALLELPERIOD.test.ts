import PARALLELPERIOD from "../PARALLELPERIOD";

test('PARALLELPERIOD reserved word', () => {
  expect('PARALLELPERIOD').toMatch(PARALLELPERIOD.PATTERN as RegExp);
  expect('something else').not.toMatch(PARALLELPERIOD.PATTERN as RegExp);
});