import YTD from "../YTD";

test('YTD reserved word', () => {
  expect('YTD').toMatch(YTD.pattern as RegExp);
  expect('something else').not.toMatch(YTD.pattern as RegExp);
});