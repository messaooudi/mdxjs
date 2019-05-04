import YTD from "../YTD";

test('YTD reserved word', () => {
  expect('YTD').toMatch(YTD.PATTERN as RegExp);
  expect('something else').not.toMatch(YTD.PATTERN as RegExp);
});