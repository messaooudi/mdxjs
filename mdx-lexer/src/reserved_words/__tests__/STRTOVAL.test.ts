import STRTOVAL from "../STRTOVAL";

test('STRTOVAL reserved word', () => {
  expect('STRTOVAL').toMatch(STRTOVAL.pattern as RegExp);
  expect('something else').not.toMatch(STRTOVAL.pattern as RegExp);
});