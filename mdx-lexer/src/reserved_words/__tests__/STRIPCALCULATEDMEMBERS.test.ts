import STRIPCALCULATEDMEMBERS from "../STRIPCALCULATEDMEMBERS";

test('STRIPCALCULATEDMEMBERS reserved word', () => {
  expect('STRIPCALCULATEDMEMBERS').toMatch(STRIPCALCULATEDMEMBERS.pattern as RegExp);
  expect('something else').not.toMatch(STRIPCALCULATEDMEMBERS.pattern as RegExp);
});