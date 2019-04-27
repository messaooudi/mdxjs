import RANK from "../RANK";

test('RANK reserved word', () => {
  expect('RANK').toMatch(RANK.PATTERN as RegExp);
  expect('something else').not.toMatch(RANK.PATTERN as RegExp);
});