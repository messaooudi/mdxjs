import ISGENERATION from "../ISGENERATION";

test('ISGENERATION reserved word', () => {
  expect('ISGENERATION').toMatch(ISGENERATION.pattern as RegExp);
  expect('something else').not.toMatch(ISGENERATION.pattern as RegExp);
});