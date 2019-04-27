import MEMBERTOSTR from "../MEMBERTOSTR";

test('MEMBERTOSTR reserved word', () => {
  expect('MEMBERTOSTR').toMatch(MEMBERTOSTR.PATTERN as RegExp);
  expect('something else').not.toMatch(MEMBERTOSTR.PATTERN as RegExp);
});