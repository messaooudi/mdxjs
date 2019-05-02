import LEFT_PARENTHESIS from "../LEFT_PARENTHESIS";

test('LEFT_PARENTHESIS symbol', () => {
  expect("(").toMatch(LEFT_PARENTHESIS.PATTERN as RegExp);
  expect('something else').not.toMatch(LEFT_PARENTHESIS.PATTERN as RegExp);
});