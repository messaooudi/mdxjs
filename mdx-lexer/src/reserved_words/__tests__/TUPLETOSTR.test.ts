import TUPLETOSTR from "../TUPLETOSTR";

test('TUPLETOSTR reserved word', () => {
  expect('TUPLETOSTR').toMatch(TUPLETOSTR.PATTERN as RegExp);
  expect('something else').not.toMatch(TUPLETOSTR.PATTERN as RegExp);
});