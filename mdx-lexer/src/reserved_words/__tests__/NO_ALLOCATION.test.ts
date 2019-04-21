import NO_ALLOCATION from "../NO_ALLOCATION";

test('NO_ALLOCATION reserved word', () => {
  expect('NO_ALLOCATION').toMatch(NO_ALLOCATION.pattern as RegExp);
  expect('something else').not.toMatch(NO_ALLOCATION.pattern as RegExp);
});