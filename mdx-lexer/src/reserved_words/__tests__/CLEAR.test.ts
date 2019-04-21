import CLEAR from "../CLEAR";

test('CLEAR reserved word', () => {
  expect('CLEAR').toMatch(CLEAR.pattern as RegExp);
  expect('something else').not.toMatch(CLEAR.pattern as RegExp);
});