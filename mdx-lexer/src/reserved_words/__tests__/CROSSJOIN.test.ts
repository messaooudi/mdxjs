import CROSSJOIN from "../CROSSJOIN";

test('CROSSJOIN reserved word', () => {
  expect('CROSSJOIN').toMatch(CROSSJOIN.PATTERN as RegExp);
  expect('something else').not.toMatch(CROSSJOIN.PATTERN as RegExp);
});