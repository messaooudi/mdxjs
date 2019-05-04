import LEFT_BRACE from "../LEFT_BRACE";

test('LEFT_BRACE symbol', () => {
  expect("{").toMatch(LEFT_BRACE.PATTERN as RegExp);
  expect('something else').not.toMatch(LEFT_BRACE.PATTERN as RegExp);
});