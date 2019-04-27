import SUBTRACT from "../SUBTRACT";

test('SUBTRACT arithmetic operator', () => {
  expect('-').toMatch(SUBTRACT.PATTERN as RegExp);
  expect('something else').not.toMatch(SUBTRACT.PATTERN as RegExp);
});