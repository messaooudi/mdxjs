import STRTOVALUE from "../STRTOVALUE";

test('STRTOVALUE reserved word', () => {
  expect('STRTOVALUE').toMatch(STRTOVALUE.PATTERN as RegExp);
  expect('something else').not.toMatch(STRTOVALUE.PATTERN as RegExp);
});