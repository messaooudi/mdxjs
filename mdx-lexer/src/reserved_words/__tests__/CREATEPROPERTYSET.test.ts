import CREATEPROPERTYSET from "../CREATEPROPERTYSET";

test('CREATEPROPERTYSET reserved word', () => {
  expect('CREATEPROPERTYSET').toMatch(CREATEPROPERTYSET.pattern as RegExp);
  expect('something else').not.toMatch(CREATEPROPERTYSET.pattern as RegExp);
});