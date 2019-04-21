import LAG from "../LAG";

test('LAG reserved word', () => {
  expect('LAG').toMatch(LAG.pattern as RegExp);
  expect('something else').not.toMatch(LAG.pattern as RegExp);
});