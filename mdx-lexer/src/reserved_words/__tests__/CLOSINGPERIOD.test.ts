import CLOSINGPERIOD from "../CLOSINGPERIOD";

test('CLOSINGPERIOD reserved word', () => {
  expect('CLOSINGPERIOD').toMatch(CLOSINGPERIOD.pattern as RegExp);
  expect('something else').not.toMatch(CLOSINGPERIOD.pattern as RegExp);
});