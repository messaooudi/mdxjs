import TOPPERCENT from "../TOPPERCENT";

test('TOPPERCENT reserved word', () => {
  expect('TOPPERCENT').toMatch(TOPPERCENT.PATTERN as RegExp);
  expect('something else').not.toMatch(TOPPERCENT.PATTERN as RegExp);
});