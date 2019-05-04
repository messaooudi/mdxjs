import VARIANCE from "../VARIANCE";

test('VARIANCE reserved word', () => {
  expect('VARIANCE').toMatch(VARIANCE.PATTERN as RegExp);
  expect('something else').not.toMatch(VARIANCE.PATTERN as RegExp);
});