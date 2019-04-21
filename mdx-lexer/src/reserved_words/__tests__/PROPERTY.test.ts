import PROPERTY from "../PROPERTY";

test('PROPERTY reserved word', () => {
  expect('PROPERTY').toMatch(PROPERTY.pattern as RegExp);
  expect('something else').not.toMatch(PROPERTY.pattern as RegExp);
});