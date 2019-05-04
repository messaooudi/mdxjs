import SORT from "../SORT";

test('SORT reserved word', () => {
  expect('SORT').toMatch(SORT.PATTERN as RegExp);
  expect('something else').not.toMatch(SORT.PATTERN as RegExp);
});