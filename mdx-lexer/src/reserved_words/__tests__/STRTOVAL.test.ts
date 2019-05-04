import STRTOVAL from "../STRTOVAL";

test('STRTOVAL reserved word', () => {
  expect('STRTOVAL').toMatch(STRTOVAL.PATTERN as RegExp);
  expect('something else').not.toMatch(STRTOVAL.PATTERN as RegExp);
});