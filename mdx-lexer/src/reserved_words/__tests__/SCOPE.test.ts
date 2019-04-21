import SCOPE from "../SCOPE";

test('SCOPE reserved word', () => {
  expect('SCOPE').toMatch(SCOPE.pattern as RegExp);
  expect('something else').not.toMatch(SCOPE.pattern as RegExp);
});