import BOTTOMSUM from "../BOTTOMSUM";

test('BOTTOMSUM reserved word', () => {
  expect('BOTTOMSUM').toMatch(BOTTOMSUM.pattern as RegExp);
  expect('something else').not.toMatch(BOTTOMSUM.pattern as RegExp);
});