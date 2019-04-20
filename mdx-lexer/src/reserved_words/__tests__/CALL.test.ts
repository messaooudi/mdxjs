import CALL from "../CALL";

test('CALL reserved word', () => {
  expect('CALL').toMatch(CALL.pattern as RegExp);
  expect('something else').not.toMatch(CALL.pattern as RegExp);
});