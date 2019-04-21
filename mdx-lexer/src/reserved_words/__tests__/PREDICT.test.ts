import PREDICT from "../PREDICT";

test('PREDICT reserved word', () => {
  expect('PREDICT').toMatch(PREDICT.pattern as RegExp);
  expect('something else').not.toMatch(PREDICT.pattern as RegExp);
});