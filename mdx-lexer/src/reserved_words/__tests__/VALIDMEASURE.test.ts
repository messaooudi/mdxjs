import VALIDMEASURE from "../VALIDMEASURE";

test('VALIDMEASURE reserved word', () => {
  expect('VALIDMEASURE').toMatch(VALIDMEASURE.PATTERN as RegExp);
  expect('something else').not.toMatch(VALIDMEASURE.PATTERN as RegExp);
});