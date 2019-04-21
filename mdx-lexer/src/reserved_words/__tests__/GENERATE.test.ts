import GENERATE from "../GENERATE";

test('GENERATE reserved word', () => {
  expect('GENERATE').toMatch(GENERATE.pattern as RegExp);
  expect('something else').not.toMatch(GENERATE.pattern as RegExp);
});