import USERNAME from "../USERNAME";

test('USERNAME reserved word', () => {
  expect('USERNAME').toMatch(USERNAME.pattern as RegExp);
  expect('something else').not.toMatch(USERNAME.pattern as RegExp);
});