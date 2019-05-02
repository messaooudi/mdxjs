import DOUBLE_QUOTE from "../DOUBLE_QUOTE";

test('DOUBLE_QUOTE symbol', () => {
  expect("").toMatch(DOUBLE_QUOTE.PATTERN as RegExp);
  expect('something else').not.toMatch(DOUBLE_QUOTE.PATTERN as RegExp);
});