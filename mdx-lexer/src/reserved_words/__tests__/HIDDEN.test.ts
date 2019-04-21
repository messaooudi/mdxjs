import HIDDEN from "../HIDDEN";

test('HIDDEN reserved word', () => {
  expect('HIDDEN').toMatch(HIDDEN.pattern as RegExp);
  expect('something else').not.toMatch(HIDDEN.pattern as RegExp);
});