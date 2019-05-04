import EMPTY from "../EMPTY";

test('EMPTY reserved word', () => {
  expect('EMPTY').toMatch(EMPTY.PATTERN as RegExp);
  expect('something else').not.toMatch(EMPTY.PATTERN as RegExp);
});