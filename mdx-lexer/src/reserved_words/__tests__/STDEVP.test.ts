import STDEVP from "../STDEVP";

test('STDEVP reserved word', () => {
  expect('STDEVP').toMatch(STDEVP.pattern as RegExp);
  expect('something else').not.toMatch(STDEVP.pattern as RegExp);
});