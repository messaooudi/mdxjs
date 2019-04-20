import BASC from "../BASC";

test('BASC reserved word', () => {
  expect('BASC').toMatch(BASC.pattern as RegExp);
  expect('something else').not.toMatch(BASC.pattern as RegExp);
});