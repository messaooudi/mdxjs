import PROPERTY from "../PROPERTY";

test('PROPERTY reserved word', () => {
  expect('PROPERTY').toMatch(PROPERTY.PATTERN as RegExp);
  expect('something else').not.toMatch(PROPERTY.PATTERN as RegExp);
});