import LAG from "../LAG";

test('LAG reserved word', () => {
  expect('LAG').toMatch(LAG.PATTERN as RegExp);
  expect('something else').not.toMatch(LAG.PATTERN as RegExp);
});