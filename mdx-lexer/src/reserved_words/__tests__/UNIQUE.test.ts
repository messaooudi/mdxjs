import UNIQUE from "../UNIQUE";

test('UNIQUE reserved word', () => {
  expect('UNIQUE').toMatch(UNIQUE.PATTERN as RegExp);
  expect('something else').not.toMatch(UNIQUE.PATTERN as RegExp);
});