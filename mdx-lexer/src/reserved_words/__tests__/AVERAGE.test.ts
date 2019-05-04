import AVERAGE from "../AVERAGE";

test('AVERAGE reserved word', () => {
  expect('AVERAGE').toMatch(AVERAGE.PATTERN as RegExp);
  expect('something else').not.toMatch(AVERAGE.PATTERN as RegExp);
});