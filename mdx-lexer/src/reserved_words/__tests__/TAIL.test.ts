import TAIL from "../TAIL";

test('TAIL reserved word', () => {
  expect('TAIL').toMatch(TAIL.PATTERN as RegExp);
  expect('something else').not.toMatch(TAIL.PATTERN as RegExp);
});