import USE from "../USE";

test('USE reserved word', () => {
  expect('USE').toMatch(USE.pattern as RegExp);
  expect('something else').not.toMatch(USE.pattern as RegExp);
});