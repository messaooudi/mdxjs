import LEAVES from "../LEAVES";

test('LEAVES reserved word', () => {
  expect('LEAVES').toMatch(LEAVES.pattern as RegExp);
  expect('something else').not.toMatch(LEAVES.pattern as RegExp);
});