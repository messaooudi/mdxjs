import DIGIT from "../DIGIT";

test('DIGIT number', () => {
  expect("125").toMatch(DIGIT.PATTERN as RegExp);
  expect('something else').not.toMatch(DIGIT.PATTERN as RegExp);
});