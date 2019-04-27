import VISUAL from "../VISUAL";

test('VISUAL reserved word', () => {
  expect('VISUAL').toMatch(VISUAL.PATTERN as RegExp);
  expect('something else').not.toMatch(VISUAL.PATTERN as RegExp);
});