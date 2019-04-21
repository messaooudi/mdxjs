import VISUAL from "../VISUAL";

test('VISUAL reserved word', () => {
  expect('VISUAL').toMatch(VISUAL.pattern as RegExp);
  expect('something else').not.toMatch(VISUAL.pattern as RegExp);
});