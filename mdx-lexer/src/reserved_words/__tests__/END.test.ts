import END from "../END";

test('END reserved word', () => {
  expect('END').toMatch(END.pattern as RegExp);
  expect('something else').not.toMatch(END.pattern as RegExp);
});