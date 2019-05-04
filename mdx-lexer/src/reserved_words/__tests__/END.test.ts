import END from "../END";

test('END reserved word', () => {
  expect('END').toMatch(END.PATTERN as RegExp);
  expect('something else').not.toMatch(END.PATTERN as RegExp);
});