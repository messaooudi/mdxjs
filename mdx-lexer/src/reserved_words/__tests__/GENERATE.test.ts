import GENERATE from "../GENERATE";

test('GENERATE reserved word', () => {
  expect('GENERATE').toMatch(GENERATE.PATTERN as RegExp);
  expect('something else').not.toMatch(GENERATE.PATTERN as RegExp);
});