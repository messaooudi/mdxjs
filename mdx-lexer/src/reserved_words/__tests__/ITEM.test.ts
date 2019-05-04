import ITEM from "../ITEM";

test('ITEM reserved word', () => {
  expect('ITEM').toMatch(ITEM.PATTERN as RegExp);
  expect('something else').not.toMatch(ITEM.PATTERN as RegExp);
});