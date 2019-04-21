import OPENINGPERIOD from "../OPENINGPERIOD";

test('OPENINGPERIOD reserved word', () => {
  expect('OPENINGPERIOD').toMatch(OPENINGPERIOD.pattern as RegExp);
  expect('something else').not.toMatch(OPENINGPERIOD.pattern as RegExp);
});