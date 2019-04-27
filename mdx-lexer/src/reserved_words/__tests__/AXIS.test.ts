import AXIS from "../AXIS";

test('AXIS reserved word', () => {
  expect('AXIS').toMatch(AXIS.PATTERN as RegExp);
  expect('something else').not.toMatch(AXIS.PATTERN as RegExp);
});