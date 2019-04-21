import NEST from "../NEST";

test('NEST reserved word', () => {
  expect('NEST').toMatch(NEST.pattern as RegExp);
  expect('something else').not.toMatch(NEST.pattern as RegExp);
});