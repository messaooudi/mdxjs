import EMPTY from "../EMPTY";

test('EMPTY reserved word', () => {
  expect('EMPTY').toMatch(EMPTY.pattern as RegExp);
  expect('something else').not.toMatch(EMPTY.pattern as RegExp);
});