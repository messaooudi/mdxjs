import SET from "../SET";

test('SET reserved word', () => {
  expect('SET').toMatch(SET.pattern as RegExp);
  expect('something else').not.toMatch(SET.pattern as RegExp);
});