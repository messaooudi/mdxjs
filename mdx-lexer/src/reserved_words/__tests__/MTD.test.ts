import MTD from "../MTD";

test('MTD reserved word', () => {
  expect('MTD').toMatch(MTD.pattern as RegExp);
  expect('something else').not.toMatch(MTD.pattern as RegExp);
});