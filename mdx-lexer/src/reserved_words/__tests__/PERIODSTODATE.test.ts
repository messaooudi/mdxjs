import PERIODSTODATE from "../PERIODSTODATE";

test('PERIODSTODATE reserved word', () => {
  expect('PERIODSTODATE').toMatch(PERIODSTODATE.pattern as RegExp);
  expect('something else').not.toMatch(PERIODSTODATE.pattern as RegExp);
});