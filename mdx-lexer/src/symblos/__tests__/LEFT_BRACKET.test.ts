import LEFT_BRACKET from "../LEFT_BRACKET";

test('LEFT_BRACKET symbol', () => {
  expect("[").toMatch(LEFT_BRACKET.PATTERN as RegExp);
  expect('something else').not.toMatch(LEFT_BRACKET.PATTERN as RegExp);
});