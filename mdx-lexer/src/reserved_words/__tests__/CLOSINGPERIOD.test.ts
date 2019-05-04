import CLOSINGPERIOD from "../CLOSINGPERIOD";

test('CLOSINGPERIOD reserved word', () => {
  expect('CLOSINGPERIOD').toMatch(CLOSINGPERIOD.PATTERN as RegExp);
  expect('something else').not.toMatch(CLOSINGPERIOD.PATTERN as RegExp);
});