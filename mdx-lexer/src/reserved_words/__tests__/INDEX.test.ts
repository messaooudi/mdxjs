import INDEX from "../INDEX";

test('INDEX reserved word', () => {
  expect('INDEX').toMatch(INDEX.pattern as RegExp);
  expect('something else').not.toMatch(INDEX.pattern as RegExp);
});