import CALL from "../CALL";

test('CALL reserved word', () => {
  expect('CALL').toMatch(CALL.PATTERN as RegExp);
  expect('something else').not.toMatch(CALL.PATTERN as RegExp);
});