import CREATEPROPERTYSET from "../CREATEPROPERTYSET";

test('CREATEPROPERTYSET reserved word', () => {
  expect('CREATEPROPERTYSET').toMatch(CREATEPROPERTYSET.PATTERN as RegExp);
  expect('something else').not.toMatch(CREATEPROPERTYSET.PATTERN as RegExp);
});