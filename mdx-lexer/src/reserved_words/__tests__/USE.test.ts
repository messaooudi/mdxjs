import USE from "../USE";

test('USE reserved word', () => {
  expect('USE').toMatch(USE.PATTERN as RegExp);
  expect('something else').not.toMatch(USE.PATTERN as RegExp);
});