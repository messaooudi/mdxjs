import AMPERSAND from "../AMPERSAND";

test('AMPERSAND symbol', () => {
  expect("&").toMatch(AMPERSAND.PATTERN as RegExp);
  expect('something else').not.toMatch(AMPERSAND.PATTERN as RegExp);
});