import WTD from "../WTD";

test('WTD reserved word', () => {
  expect('WTD').toMatch(WTD.pattern as RegExp);
  expect('something else').not.toMatch(WTD.pattern as RegExp);
});