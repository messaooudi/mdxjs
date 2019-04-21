import CUBE from "../CUBE";

test('CUBE reserved word', () => {
  expect('CUBE').toMatch(CUBE.pattern as RegExp);
  expect('something else').not.toMatch(CUBE.pattern as RegExp);
});