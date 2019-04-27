import PARENT from "../PARENT";

test('PARENT reserved word', () => {
  expect('PARENT').toMatch(PARENT.PATTERN as RegExp);
  expect('something else').not.toMatch(PARENT.PATTERN as RegExp);
});