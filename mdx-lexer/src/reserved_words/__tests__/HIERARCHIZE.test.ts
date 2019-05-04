import HIERARCHIZE from "../HIERARCHIZE";

test('HIERARCHIZE reserved word', () => {
  expect('HIERARCHIZE').toMatch(HIERARCHIZE.PATTERN as RegExp);
  expect('something else').not.toMatch(HIERARCHIZE.PATTERN as RegExp);
});