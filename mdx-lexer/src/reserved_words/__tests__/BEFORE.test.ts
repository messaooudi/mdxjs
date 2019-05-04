import BEFORE from "../BEFORE";

test('BEFORE reserved word', () => {
  expect('BEFORE').toMatch(BEFORE.PATTERN as RegExp);
  expect('something else').not.toMatch(BEFORE.PATTERN as RegExp);
});