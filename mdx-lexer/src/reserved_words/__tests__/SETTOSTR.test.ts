import SETTOSTR from "../SETTOSTR";

test('SETTOSTR reserved word', () => {
  expect('SETTOSTR').toMatch(SETTOSTR.pattern as RegExp);
  expect('something else').not.toMatch(SETTOSTR.pattern as RegExp);
});