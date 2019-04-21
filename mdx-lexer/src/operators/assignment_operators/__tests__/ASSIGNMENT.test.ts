import ASSIGNMENT from "../ASSIGNMENT";

test('ASSIGNMENT operator', () => {
  expect('=').toMatch(ASSIGNMENT.pattern as RegExp);
  expect('something else').not.toMatch(ASSIGNMENT.pattern as RegExp);
});