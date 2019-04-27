import WHITE_SPACE from "../WHITE_SPACE";

test('WHITE_SPACE', () => {
  expect(' ').toMatch(WHITE_SPACE.PATTERN as RegExp);
  expect('  ').toMatch(WHITE_SPACE.PATTERN as RegExp);
  expect('').not.toMatch(WHITE_SPACE.PATTERN as RegExp);
  expect('something').not.toMatch(WHITE_SPACE.PATTERN as RegExp);
});