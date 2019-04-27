import SCOPE from "../SCOPE";

test('SCOPE reserved word', () => {
  expect('SCOPE').toMatch(SCOPE.PATTERN as RegExp);
  expect('something else').not.toMatch(SCOPE.PATTERN as RegExp);
});