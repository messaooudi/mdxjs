import COLON from "../COLON";

test('COLON symbol', () => {
  expect(":").toMatch(COLON.PATTERN as RegExp);
  expect('something else').not.toMatch(COLON.PATTERN as RegExp);
});