import BOTTOMPERCENT from "../BOTTOMPERCENT";

test('BOTTOMPERCENT reserved word', () => {
  expect('BOTTOMPERCENT').toMatch(BOTTOMPERCENT.PATTERN as RegExp);
  expect('something else').not.toMatch(BOTTOMPERCENT.PATTERN as RegExp);
});