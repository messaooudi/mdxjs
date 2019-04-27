import LOOKUPCUBE from "../LOOKUPCUBE";

test('LOOKUPCUBE reserved word', () => {
  expect('LOOKUPCUBE').toMatch(LOOKUPCUBE.PATTERN as RegExp);
  expect('something else').not.toMatch(LOOKUPCUBE.PATTERN as RegExp);
});