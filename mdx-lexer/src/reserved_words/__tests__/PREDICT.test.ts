import PREDICT from "../PREDICT";

test('PREDICT reserved word', () => {
  expect('PREDICT').toMatch(PREDICT.PATTERN as RegExp);
  expect('something else').not.toMatch(PREDICT.PATTERN as RegExp);
});