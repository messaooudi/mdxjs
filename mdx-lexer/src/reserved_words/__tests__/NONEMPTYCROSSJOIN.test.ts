import NONEMPTYCROSSJOIN from "../NONEMPTYCROSSJOIN";

test('NONEMPTYCROSSJOIN reserved word', () => {
  expect('NONEMPTYCROSSJOIN').toMatch(NONEMPTYCROSSJOIN.pattern as RegExp);
  expect('something else').not.toMatch(NONEMPTYCROSSJOIN.pattern as RegExp);
});