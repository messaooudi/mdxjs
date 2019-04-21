import RANK from "../RANK";

test('RANK reserved word', () => {
  expect('RANK').toMatch(RANK.pattern as RegExp);
  expect('something else').not.toMatch(RANK.pattern as RegExp);
});