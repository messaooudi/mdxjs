import ON from "../ON";

test('ON reserved word', () => {
  expect('ON').toMatch(ON.PATTERN as RegExp);
  expect('something else').not.toMatch(ON.PATTERN as RegExp);
});