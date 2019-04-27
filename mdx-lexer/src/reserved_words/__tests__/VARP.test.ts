import VARP from "../VARP";

test('VARP reserved word', () => {
  expect('VARP').toMatch(VARP.PATTERN as RegExp);
  expect('something else').not.toMatch(VARP.PATTERN as RegExp);
});