import NON from "../NON";

test('NON reserved word', () => {
  expect('NON').toMatch(NON.pattern as RegExp);
  expect('something else').not.toMatch(NON.pattern as RegExp);
});