import ASSIGNMENT from "../ASSIGNMENT";

test('ASSIGNMENT operator', () => {
  expect('=').toMatch(ASSIGNMENT.PATTERN as RegExp);
  expect('something else').not.toMatch(ASSIGNMENT.PATTERN as RegExp);
});