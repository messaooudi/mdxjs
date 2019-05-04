import STDEVP from "../STDEVP";

test('STDEVP reserved word', () => {
  expect('STDEVP').toMatch(STDEVP.PATTERN as RegExp);
  expect('something else').not.toMatch(STDEVP.PATTERN as RegExp);
});