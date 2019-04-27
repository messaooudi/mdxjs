import MEMBERS from "../MEMBERS";

test('MEMBERS reserved word', () => {
  expect('MEMBERS').toMatch(MEMBERS.PATTERN as RegExp);
  expect('something else').not.toMatch(MEMBERS.PATTERN as RegExp);
});