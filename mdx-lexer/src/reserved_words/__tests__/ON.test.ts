import ON from "../ON";

test('ON reserved word', () => {
  expect('ON').toMatch(ON.pattern as RegExp);
  expect('something else').not.toMatch(ON.pattern as RegExp);
});