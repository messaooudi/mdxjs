import UNIQUE from "../UNIQUE";

test('UNIQUE reserved word', () => {
  expect('UNIQUE').toMatch(UNIQUE.pattern as RegExp);
  expect('something else').not.toMatch(UNIQUE.pattern as RegExp);
});