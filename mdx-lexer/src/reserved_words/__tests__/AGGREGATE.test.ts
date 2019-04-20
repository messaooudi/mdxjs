import AGGREGATE from "../AGGREGATE";

test('AGGREGATE reserved word', () => {
  expect('AGGREGATE').toMatch(AGGREGATE.pattern as RegExp);
  expect('something else').not.toMatch(AGGREGATE.pattern as RegExp);
});