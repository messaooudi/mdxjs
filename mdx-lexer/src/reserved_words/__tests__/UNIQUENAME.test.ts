import UNIQUENAME from "../UNIQUENAME";

test('UNIQUENAME reserved word', () => {
  expect('UNIQUENAME').toMatch(UNIQUENAME.pattern as RegExp);
  expect('something else').not.toMatch(UNIQUENAME.pattern as RegExp);
});