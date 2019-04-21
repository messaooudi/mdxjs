import TYPE from "../TYPE";

test('TYPE reserved word', () => {
  expect('TYPE').toMatch(TYPE.pattern as RegExp);
  expect('something else').not.toMatch(TYPE.pattern as RegExp);
});