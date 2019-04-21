import VARIANCE from "../VARIANCE";

test('VARIANCE reserved word', () => {
  expect('VARIANCE').toMatch(VARIANCE.pattern as RegExp);
  expect('something else').not.toMatch(VARIANCE.pattern as RegExp);
});