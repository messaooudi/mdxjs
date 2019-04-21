import SUBSET from "../SUBSET";

test('SUBSET reserved word', () => {
  expect('SUBSET').toMatch(SUBSET.pattern as RegExp);
  expect('something else').not.toMatch(SUBSET.pattern as RegExp);
});