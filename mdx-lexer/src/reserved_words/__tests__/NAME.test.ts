import NAME from "../NAME";

test('NAME reserved word', () => {
  expect('NAME').toMatch(NAME.pattern as RegExp);
  expect('something else').not.toMatch(NAME.pattern as RegExp);
});