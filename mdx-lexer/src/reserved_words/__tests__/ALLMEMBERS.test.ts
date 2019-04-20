import ALLMEMBERS from "../ALLMEMBERS";

test('ALLMEMBERS reserved word', () => {
  expect('ALLMEMBERS').toMatch(ALLMEMBERS.pattern as RegExp);
  expect('something else').not.toMatch(ALLMEMBERS.pattern as RegExp);
});