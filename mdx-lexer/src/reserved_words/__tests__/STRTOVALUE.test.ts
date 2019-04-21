import STRTOVALUE from "../STRTOVALUE";

test('STRTOVALUE reserved word', () => {
  expect('STRTOVALUE').toMatch(STRTOVALUE.pattern as RegExp);
  expect('something else').not.toMatch(STRTOVALUE.pattern as RegExp);
});