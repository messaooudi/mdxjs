import SELF_AND_BEFORE from "../SELF_AND_BEFORE";

test('SELF_AND_BEFORE reserved word', () => {
  expect('SELF_AND_BEFORE').toMatch(SELF_AND_BEFORE.pattern as RegExp);
  expect('something else').not.toMatch(SELF_AND_BEFORE.pattern as RegExp);
});