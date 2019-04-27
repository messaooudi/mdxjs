import CLEAR from "../CLEAR";

test('CLEAR reserved word', () => {
  expect('CLEAR').toMatch(CLEAR.PATTERN as RegExp);
  expect('something else').not.toMatch(CLEAR.PATTERN as RegExp);
});