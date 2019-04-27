import TYPE from "../TYPE";

test('TYPE reserved word', () => {
  expect('TYPE').toMatch(TYPE.PATTERN as RegExp);
  expect('something else').not.toMatch(TYPE.PATTERN as RegExp);
});