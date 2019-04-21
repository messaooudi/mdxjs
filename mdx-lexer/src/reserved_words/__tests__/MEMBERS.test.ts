import MEMBERS from "../MEMBERS";

test('MEMBERS reserved word', () => {
  expect('MEMBERS').toMatch(MEMBERS.pattern as RegExp);
  expect('something else').not.toMatch(MEMBERS.pattern as RegExp);
});