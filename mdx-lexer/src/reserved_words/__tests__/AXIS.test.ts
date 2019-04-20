import AXIS from "../AXIS";

test('AXIS reserved word', () => {
  expect('AXIS').toMatch(AXIS.pattern as RegExp);
  expect('something else').not.toMatch(AXIS.pattern as RegExp);
});