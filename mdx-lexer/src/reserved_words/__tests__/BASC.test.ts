import BASC from "../BASC";

test('BASC reserved word', () => {
  expect('BASC').toMatch(BASC.PATTERN as RegExp);
  expect('something else').not.toMatch(BASC.PATTERN as RegExp);
});