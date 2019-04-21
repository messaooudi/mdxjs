import SUBTRACT from "../SUBTRACT";

test('SUBTRACT arithmetic operator', () => {
  expect('-').toMatch(SUBTRACT.pattern as RegExp);
  expect('something else').not.toMatch(SUBTRACT.pattern as RegExp);
});