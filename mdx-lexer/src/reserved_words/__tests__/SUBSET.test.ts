import SUBSET from "../SUBSET";

test('SUBSET reserved word', () => {
  expect('SUBSET').toMatch(SUBSET.PATTERN as RegExp);
  expect('something else').not.toMatch(SUBSET.PATTERN as RegExp);
});