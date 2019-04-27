import USE_EQUAL_ALLOCATION from "../USE_EQUAL_ALLOCATION";

test('USE_EQUAL_ALLOCATION reserved word', () => {
  expect('USE_EQUAL_ALLOCATION').toMatch(USE_EQUAL_ALLOCATION.PATTERN as RegExp);
  expect('something else').not.toMatch(USE_EQUAL_ALLOCATION.PATTERN as RegExp);
});