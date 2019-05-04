import TOPSUM from "../TOPSUM";

test('TOPSUM reserved word', () => {
  expect('TOPSUM').toMatch(TOPSUM.PATTERN as RegExp);
  expect('something else').not.toMatch(TOPSUM.PATTERN as RegExp);
});