import QTD from "../QTD";

test('QTD reserved word', () => {
  expect('QTD').toMatch(QTD.PATTERN as RegExp);
  expect('something else').not.toMatch(QTD.PATTERN as RegExp);
});