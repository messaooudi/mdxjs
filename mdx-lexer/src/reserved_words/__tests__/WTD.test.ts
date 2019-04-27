import WTD from "../WTD";

test('WTD reserved word', () => {
  expect('WTD').toMatch(WTD.PATTERN as RegExp);
  expect('something else').not.toMatch(WTD.PATTERN as RegExp);
});