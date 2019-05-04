import HIDDEN from "../HIDDEN";

test('HIDDEN reserved word', () => {
  expect('HIDDEN').toMatch(HIDDEN.PATTERN as RegExp);
  expect('something else').not.toMatch(HIDDEN.PATTERN as RegExp);
});