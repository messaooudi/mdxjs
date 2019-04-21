import SORT from "../SORT";

test('SORT reserved word', () => {
  expect('SORT').toMatch(SORT.pattern as RegExp);
  expect('something else').not.toMatch(SORT.pattern as RegExp);
});