import USE_WEIGHTED_ALLOCATION from "../USE_WEIGHTED_ALLOCATION";

test('USE_WEIGHTED_ALLOCATION reserved word', () => {
  expect('USE_WEIGHTED_ALLOCATION').toMatch(USE_WEIGHTED_ALLOCATION.PATTERN as RegExp);
  expect('something else').not.toMatch(USE_WEIGHTED_ALLOCATION.PATTERN as RegExp);
});