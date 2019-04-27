import ALLMEMBERS from "../ALLMEMBERS";

test('ALLMEMBERS reserved word', () => {
  expect('ALLMEMBERS').toMatch(ALLMEMBERS.PATTERN as RegExp);
  expect('something else').not.toMatch(ALLMEMBERS.PATTERN as RegExp);
});