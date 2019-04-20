import BOTTOMPERCENT from "../BOTTOMPERCENT";

test('BOTTOMPERCENT reserved word', () => {
  expect('BOTTOMPERCENT').toMatch(BOTTOMPERCENT.pattern as RegExp);
  expect('something else').not.toMatch(BOTTOMPERCENT.pattern as RegExp);
});