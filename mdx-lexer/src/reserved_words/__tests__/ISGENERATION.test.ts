import ISGENERATION from "../ISGENERATION";

test('ISGENERATION reserved word', () => {
  expect('ISGENERATION').toMatch(ISGENERATION.PATTERN as RegExp);
  expect('something else').not.toMatch(ISGENERATION.PATTERN as RegExp);
});