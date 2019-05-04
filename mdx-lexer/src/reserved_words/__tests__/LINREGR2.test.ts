import LINREGR2 from "../LINREGR2";

test('LINREGR2 reserved word', () => {
  expect('LINREGR2').toMatch(LINREGR2.PATTERN as RegExp);
  expect('something else').not.toMatch(LINREGR2.PATTERN as RegExp);
});