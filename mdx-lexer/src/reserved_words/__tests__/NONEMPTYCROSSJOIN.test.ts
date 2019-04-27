import NONEMPTYCROSSJOIN from "../NONEMPTYCROSSJOIN";

test('NONEMPTYCROSSJOIN reserved word', () => {
  expect('NONEMPTYCROSSJOIN').toMatch(NONEMPTYCROSSJOIN.PATTERN as RegExp);
  expect('something else').not.toMatch(NONEMPTYCROSSJOIN.PATTERN as RegExp);
});