import PARENT from "../PARENT";

test('PARENT reserved word', () => {
  expect('PARENT').toMatch(PARENT.pattern as RegExp);
  expect('something else').not.toMatch(PARENT.pattern as RegExp);
});