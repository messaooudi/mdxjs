import PERIODSTODATE from "../PERIODSTODATE";

test('PERIODSTODATE reserved word', () => {
  expect('PERIODSTODATE').toMatch(PERIODSTODATE.PATTERN as RegExp);
  expect('something else').not.toMatch(PERIODSTODATE.PATTERN as RegExp);
});