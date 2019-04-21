import MEMBERTOSTR from "../MEMBERTOSTR";

test('MEMBERTOSTR reserved word', () => {
  expect('MEMBERTOSTR').toMatch(MEMBERTOSTR.pattern as RegExp);
  expect('something else').not.toMatch(MEMBERTOSTR.pattern as RegExp);
});