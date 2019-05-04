import UNIQUENAME from "../UNIQUENAME";

test('UNIQUENAME reserved word', () => {
  expect('UNIQUENAME').toMatch(UNIQUENAME.PATTERN as RegExp);
  expect('something else').not.toMatch(UNIQUENAME.PATTERN as RegExp);
});