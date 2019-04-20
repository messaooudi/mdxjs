import ALL from "../ALL";

test('ALL reserved word', () => {
  expect('ALL').toMatch(ALL.pattern as RegExp);
  expect('something else').not.toMatch(ALL.pattern as RegExp);
});