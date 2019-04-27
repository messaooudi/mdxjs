import INDEX from "../INDEX";

test('INDEX reserved word', () => {
  expect('INDEX').toMatch(INDEX.PATTERN as RegExp);
  expect('something else').not.toMatch(INDEX.PATTERN as RegExp);
});