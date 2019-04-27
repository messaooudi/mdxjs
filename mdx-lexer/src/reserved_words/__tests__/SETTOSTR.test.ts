import SETTOSTR from "../SETTOSTR";

test('SETTOSTR reserved word', () => {
  expect('SETTOSTR').toMatch(SETTOSTR.PATTERN as RegExp);
  expect('something else').not.toMatch(SETTOSTR.PATTERN as RegExp);
});