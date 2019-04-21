import EXTRACT from "../EXTRACT";

test('EXTRACT reserved word', () => {
  expect('EXTRACT').toMatch(EXTRACT.pattern as RegExp);
  expect('something else').not.toMatch(EXTRACT.pattern as RegExp);
});