import ITEM from "../ITEM";

test('ITEM reserved word', () => {
  expect('ITEM').toMatch(ITEM.pattern as RegExp);
  expect('something else').not.toMatch(ITEM.pattern as RegExp);
});