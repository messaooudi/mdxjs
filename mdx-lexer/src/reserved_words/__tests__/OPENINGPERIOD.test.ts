import OPENINGPERIOD from "../OPENINGPERIOD";

test('OPENINGPERIOD reserved word', () => {
  expect('OPENINGPERIOD').toMatch(OPENINGPERIOD.PATTERN as RegExp);
  expect('something else').not.toMatch(OPENINGPERIOD.PATTERN as RegExp);
});