import CUBE from "../CUBE";

test('CUBE reserved word', () => {
  expect('CUBE').toMatch(CUBE.PATTERN as RegExp);
  expect('something else').not.toMatch(CUBE.PATTERN as RegExp);
});