import NON from "../NON";

test('NON reserved word', () => {
  expect('NON').toMatch(NON.PATTERN as RegExp);
  expect('something else').not.toMatch(NON.PATTERN as RegExp);
});