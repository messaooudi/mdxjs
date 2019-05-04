import DOUBLE_HYPHENS from "../DOUBLE_HYPHENS";

test('DOUBLE_HYPHENS comment', () => {
  expect('-- -this is a valid comment').toMatch(DOUBLE_HYPHENS.PATTERN as RegExp);
  expect('something else').not.toMatch(DOUBLE_HYPHENS.PATTERN as RegExp);
});