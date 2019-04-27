import VARIANCEP from "../VARIANCEP";

test('VARIANCEP reserved word', () => {
  expect('VARIANCEP').toMatch(VARIANCEP.PATTERN as RegExp);
  expect('something else').not.toMatch(VARIANCEP.PATTERN as RegExp);
});