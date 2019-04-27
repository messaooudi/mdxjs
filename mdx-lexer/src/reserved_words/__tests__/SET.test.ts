import SET from "../SET";

test('SET reserved word', () => {
  expect('SET').toMatch(SET.PATTERN as RegExp);
  expect('something else').not.toMatch(SET.PATTERN as RegExp);
});