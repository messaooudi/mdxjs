import ADDCALCULATEDMEMBERS from "../ADDCALCULATEDMEMBERS";

test('ABSOLUTE reserved word', () => {
  expect('ADDCALCULATEDMEMBERS').toMatch(ADDCALCULATEDMEMBERS.PATTERN as RegExp);
  expect('something else').not.toMatch(ADDCALCULATEDMEMBERS.PATTERN as RegExp);
});