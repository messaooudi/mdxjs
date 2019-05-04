import EXTRACT from "../EXTRACT";

test('EXTRACT reserved word', () => {
  expect('EXTRACT').toMatch(EXTRACT.PATTERN as RegExp);
  expect('something else').not.toMatch(EXTRACT.PATTERN as RegExp);
});