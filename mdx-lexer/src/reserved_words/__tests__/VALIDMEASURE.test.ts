import VALIDMEASURE from "../VALIDMEASURE";

test('VALIDMEASURE reserved word', () => {
  expect('VALIDMEASURE').toMatch(VALIDMEASURE.pattern as RegExp);
  expect('something else').not.toMatch(VALIDMEASURE.pattern as RegExp);
});