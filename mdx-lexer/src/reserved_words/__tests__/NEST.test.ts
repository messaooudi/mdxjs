import NEST from "../NEST";

test('NEST reserved word', () => {
  expect('NEST').toMatch(NEST.PATTERN as RegExp);
  expect('something else').not.toMatch(NEST.PATTERN as RegExp);
});