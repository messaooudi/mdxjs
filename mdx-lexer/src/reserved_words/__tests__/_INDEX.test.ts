import INDEX from "../_INDEX";

test('INDEX reserved word', () => {
  expect('INDEX').toMatch(INDEX.PATTERN as RegExp);
  expect('something else').not.toMatch(INDEX.PATTERN as RegExp);
});