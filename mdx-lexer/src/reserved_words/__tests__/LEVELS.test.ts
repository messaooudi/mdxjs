import LEVELS from "../LEVELS";

test('LEVELS reserved word', () => {
  expect('LEVELS').toMatch(LEVELS.PATTERN as RegExp);
  expect('something else').not.toMatch(LEVELS.PATTERN as RegExp);
});