import ERROR from "../ERROR";

test('ERROR reserved word', () => {
  expect('ERROR').toMatch(ERROR.PATTERN as RegExp);
  expect('something else').not.toMatch(ERROR.PATTERN as RegExp);
});