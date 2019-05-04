import AGGREGATE from "../AGGREGATE";

test('AGGREGATE reserved word', () => {
  expect('AGGREGATE').toMatch(AGGREGATE.PATTERN as RegExp);
  expect('something else').not.toMatch(AGGREGATE.PATTERN as RegExp);
});