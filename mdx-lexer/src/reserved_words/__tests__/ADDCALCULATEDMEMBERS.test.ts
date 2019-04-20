import ADDCALCULATEDMEMBERS from "../ADDCALCULATEDMEMBERS";

test('ABSOLUTE reserved word', () => {
  expect('ADDCALCULATEDMEMBERS').toMatch(ADDCALCULATEDMEMBERS.pattern as RegExp);
  expect('something else').not.toMatch(ADDCALCULATEDMEMBERS.pattern as RegExp);
});