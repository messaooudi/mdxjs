import HIERARCHIZE from "../HIERARCHIZE";

test('HIERARCHIZE reserved word', () => {
  expect('HIERARCHIZE').toMatch(HIERARCHIZE.pattern as RegExp);
  expect('something else').not.toMatch(HIERARCHIZE.pattern as RegExp);
});