import RIGHT_PARENTHESIS from "../RIGHT_PARENTHESIS";

test('RIGHT_PARENTHESIS symbol', () => {
  expect(")").toMatch(RIGHT_PARENTHESIS.PATTERN as RegExp);
  expect('something else').not.toMatch(RIGHT_PARENTHESIS.PATTERN as RegExp);
});