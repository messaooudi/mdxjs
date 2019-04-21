import TOPPERCENT from "../TOPPERCENT";

test('TOPPERCENT reserved word', () => {
  expect('TOPPERCENT').toMatch(TOPPERCENT.pattern as RegExp);
  expect('something else').not.toMatch(TOPPERCENT.pattern as RegExp);
});