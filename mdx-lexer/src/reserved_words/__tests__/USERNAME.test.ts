import USERNAME from "../USERNAME";

test('USERNAME reserved word', () => {
  expect('USERNAME').toMatch(USERNAME.PATTERN as RegExp);
  expect('something else').not.toMatch(USERNAME.PATTERN as RegExp);
});