import LEAVES from "../LEAVES";

test('LEAVES reserved word', () => {
  expect('LEAVES').toMatch(LEAVES.PATTERN as RegExp);
  expect('something else').not.toMatch(LEAVES.PATTERN as RegExp);
});