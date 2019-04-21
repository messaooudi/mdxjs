import LOOKUPCUBE from "../LOOKUPCUBE";

test('LOOKUPCUBE reserved word', () => {
  expect('LOOKUPCUBE').toMatch(LOOKUPCUBE.pattern as RegExp);
  expect('something else').not.toMatch(LOOKUPCUBE.pattern as RegExp);
});