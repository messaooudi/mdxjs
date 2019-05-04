import SIMPLE_QUOTE from "../SIMPLE_QUOTE";

test('SIMPLE_QUOTE symbol', () => {
  expect("'").toMatch(SIMPLE_QUOTE.PATTERN as RegExp);
  expect('something else').not.toMatch(SIMPLE_QUOTE.PATTERN as RegExp);
});