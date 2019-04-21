import DOUBLE_FORWARD_SLASHES from "../DOUBLE_FORWARD_SLASHES";

test('DOUBLE_FORWARD_SLASHES comment', () => {
  expect('// /this is a valid comment').toMatch(DOUBLE_FORWARD_SLASHES.pattern as RegExp);
  expect('/ something else').not.toMatch(DOUBLE_FORWARD_SLASHES.pattern as RegExp);
});