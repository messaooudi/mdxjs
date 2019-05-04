import NAME from "../NAME";

test('NAME reserved word', () => {
  expect('NAME').toMatch(NAME.PATTERN as RegExp);
  expect('something else').not.toMatch(NAME.PATTERN as RegExp);
});