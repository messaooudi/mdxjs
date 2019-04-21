import VARIANCEP from "../VARIANCEP";

test('VARIANCEP reserved word', () => {
  expect('VARIANCEP').toMatch(VARIANCEP.pattern as RegExp);
  expect('something else').not.toMatch(VARIANCEP.pattern as RegExp);
});