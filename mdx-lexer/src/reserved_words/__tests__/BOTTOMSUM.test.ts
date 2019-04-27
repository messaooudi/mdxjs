import BOTTOMSUM from "../BOTTOMSUM";

test('BOTTOMSUM reserved word', () => {
  expect('BOTTOMSUM').toMatch(BOTTOMSUM.PATTERN as RegExp);
  expect('something else').not.toMatch(BOTTOMSUM.PATTERN as RegExp);
});