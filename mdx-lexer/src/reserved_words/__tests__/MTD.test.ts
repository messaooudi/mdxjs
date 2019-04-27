import MTD from "../MTD";

test('MTD reserved word', () => {
  expect('MTD').toMatch(MTD.PATTERN as RegExp);
  expect('something else').not.toMatch(MTD.PATTERN as RegExp);
});