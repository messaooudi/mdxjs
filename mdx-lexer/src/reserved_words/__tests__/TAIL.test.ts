import TAIL from "../TAIL";

test('TAIL reserved word', () => {
  expect('TAIL').toMatch(TAIL.pattern as RegExp);
  expect('something else').not.toMatch(TAIL.pattern as RegExp);
});