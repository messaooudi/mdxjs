import VARP from "../VARP";

test('VARP reserved word', () => {
  expect('VARP').toMatch(VARP.pattern as RegExp);
  expect('something else').not.toMatch(VARP.pattern as RegExp);
});