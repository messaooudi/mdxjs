import SEMICOLON from "../SEMICOLON";

test('SEMICOLON symbol', () => {
  expect(";").toMatch(SEMICOLON.PATTERN as RegExp);
  expect('something else').not.toMatch(SEMICOLON.PATTERN as RegExp);
});