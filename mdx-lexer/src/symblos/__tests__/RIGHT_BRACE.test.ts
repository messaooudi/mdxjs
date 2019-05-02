import RIGHT_BRACE from "../RIGHT_BRACE";

test('RIGHT_BRACE symbol', () => {
  expect("}").toMatch(RIGHT_BRACE.PATTERN as RegExp);
  expect('something else').not.toMatch(RIGHT_BRACE.PATTERN as RegExp);
});