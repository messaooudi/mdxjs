import QTD from "../QTD";

test('QTD reserved word', () => {
  expect('QTD').toMatch(QTD.pattern as RegExp);
  expect('something else').not.toMatch(QTD.pattern as RegExp);
});