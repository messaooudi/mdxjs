import CROSSJOIN from "../CROSSJOIN";

test('CROSSJOIN reserved word', () => {
  expect('CROSSJOIN').toMatch(CROSSJOIN.pattern as RegExp);
  expect('something else').not.toMatch(CROSSJOIN.pattern as RegExp);
});