import TUPLETOSTR from "../TUPLETOSTR";

test('TUPLETOSTR reserved word', () => {
  expect('TUPLETOSTR').toMatch(TUPLETOSTR.pattern as RegExp);
  expect('something else').not.toMatch(TUPLETOSTR.pattern as RegExp);
});