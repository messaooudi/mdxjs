import ALL from "../ALL";

test('ALL reserved word', () => {
  expect('ALL').toMatch(ALL.PATTERN as RegExp);
  expect('something else').not.toMatch(ALL.PATTERN as RegExp);
});