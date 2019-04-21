import USE_WEIGHTED_INCREMENT from "../USE_WEIGHTED_INCREMENT";

test('USE_WEIGHTED_INCREMENT reserved word', () => {
  expect('USE_WEIGHTED_INCREMENT').toMatch(USE_WEIGHTED_INCREMENT.pattern as RegExp);
  expect('something else').not.toMatch(USE_WEIGHTED_INCREMENT.pattern as RegExp);
});