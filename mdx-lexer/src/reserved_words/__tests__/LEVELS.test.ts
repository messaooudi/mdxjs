import LEVELS from "../LEVELS";

test('LEVELS reserved word', () => {
  expect('LEVELS').toMatch(LEVELS.pattern as RegExp);
  expect('something else').not.toMatch(LEVELS.pattern as RegExp);
});