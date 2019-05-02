import RIGHT_BRACKET from "../RIGHT_BRACKET";

test('RIGHT_BRACKET symbol', () => {
  expect("]").toMatch(RIGHT_BRACKET.PATTERN as RegExp);
  expect('something else').not.toMatch(RIGHT_BRACKET.PATTERN as RegExp);
});