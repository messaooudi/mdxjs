import AVERAGE from "../AVERAGE";

test('AVERAGE reserved word', () => {
  expect('AVERAGE').toMatch(AVERAGE.pattern as RegExp);
  expect('something else').not.toMatch(AVERAGE.pattern as RegExp);
});