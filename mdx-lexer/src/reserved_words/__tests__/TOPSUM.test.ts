import TOPSUM from "../TOPSUM";

test('TOPSUM reserved word', () => {
  expect('TOPSUM').toMatch(TOPSUM.pattern as RegExp);
  expect('something else').not.toMatch(TOPSUM.pattern as RegExp);
});