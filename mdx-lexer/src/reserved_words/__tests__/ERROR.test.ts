import ERROR from "../ERROR";

test('ERROR reserved word', () => {
  expect('ERROR').toMatch(ERROR.pattern as RegExp);
  expect('something else').not.toMatch(ERROR.pattern as RegExp);
});