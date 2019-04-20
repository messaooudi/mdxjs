import BEFORE from "../BEFORE";

test('BEFORE reserved word', () => {
  expect('BEFORE').toMatch(BEFORE.pattern as RegExp);
  expect('something else').not.toMatch(BEFORE.pattern as RegExp);
});